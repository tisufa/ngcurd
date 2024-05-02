import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseModule } from 'src/app/core/base';
import { RoleModel } from 'src/app/core/models';
import { Validators } from 'src/app/shared/validators';
import { AuthUsecase } from '../../auth.usecase';
import { SignUpModel } from '../../shared/models';

@Component({
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent extends BaseModule {
  public roles: RoleModel[];
  constructor(private _authUsecase: AuthUsecase) {
    super('auth.module.sign-up');
  }

  protected override onInit(): void {
    this.setStateInitialization();
    this.buildFormGroup();
    this.setStateReady();
  }

  private setStateInitialization(): void {
    this.roles = RoleModel.createList();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      username: [
        null,
        Validators.compose([
          Validators.required('Username is required'),
          Validators.minLength(2, 'Username should more than 2 characters'),
          Validators.maxLength(16, 'Username should less than 8 characters'),
          Validators.alphaNumeric('Username should be alphanumeric'),
        ]),
      ],
      password: [null, Validators.required('Password is required')],
      email: [
        null,
        Validators.compose([
          Validators.required('Email is required'),
          Validators.email('Invalid email address'),
        ]),
      ],
      roleName: [null, Validators.required('Role is required')],
    });
  }

  protected handleCancel(): void {
    this.router.navigate(['/auth/sign-in']);
  }

  public handleSubmit(): void {
    this.validate();
    if (this.formGroup.valid) {
      const model: SignUpModel = this.formGroup.value;
      this.setStateProcessing();
      this._authUsecase
        .signUp(model)
        .pipe(takeUntil(this.subject))
        .subscribe((result) => {
          if (result.isSuccess) {
            this.globalService.toast.showSuccess('Successfully to sign up');
            this.router.navigate(['/auth/sign-in']);
          } else {
            const error = result.getErrorValue() as HttpErrorResponse;
            console.error(error);
            this.globalService.toast.showError('Failed to sign up');
          }
        });
    }
  }
}
