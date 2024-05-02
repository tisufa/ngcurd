import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseModule } from 'src/app/core/base';
import { HttpResponse } from 'src/app/core/domains';
import { Validators } from 'src/app/shared/validators';
import { AuthUsecase } from '../../auth.usecase';
import { SignInModel } from '../../shared/models';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SignInComponent extends BaseModule {
  constructor(private _authUsecase: AuthUsecase) {
    super('auth.module.sign-in');
  }

  protected override onInit(): void {
    this.buildFormGroup();
    this.setStateReady();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      username: [null, Validators.required('Username is required')],
      password: [null, Validators.required('Password is required')],
    });
  }

  protected handleSignUp(): void {
    this.router.navigate(['/auth/sign-up']);
  }

  protected handleSignIn(): void {
    this.validate();
    if (this.formGroup.valid) {
      const model: SignInModel = this.formGroup.value;
      this._authUsecase
        .signIn(model)
        .pipe(takeUntil(this.subject))
        .subscribe((result) => {
          if (result.isSuccess) {
            window.open('/', '_parent');
          } else {
            const error = result.getErrorValue() as HttpErrorResponse | string;
            if (error === HttpResponse.INVALID_USERNAME_OR_PASSWORD) {
              this.formGroup.get('username')?.setErrors({});
              this.formGroup.get('password')?.setErrors({});
              this.globalService.toast.showError(error);
            } else {
              console.error(error);
              this.globalService.toast.showError('Failed to sign in');
            }
          }
        });
    }
  }
}
