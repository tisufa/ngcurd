import { Component, EventEmitter, Output } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base-component';
import { HttpResponse } from 'src/app/core/domains';
import { UserUsecase } from 'src/app/core/usecase';
import { Validators } from 'src/app/shared/validators';

@Component({
  templateUrl: './popup-confirm-password.component.html',
})
export class PopupConfirmPasswordComponent extends BaseComponent {
  @Output() onChange: EventEmitter<boolean>;
  constructor(private _userUsecase: UserUsecase) {
    super('popup.confirm-password');
    this.onChange = new EventEmitter();
  }

  protected override onInit(): void {
    this.buildFormGroup();
    this.setStateReady();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      password: [null, Validators.required('Password is required')],
    });
  }

  public handleConfirm(): void {
    this.validate();
    if (this.formGroup.valid) {
      const { password } = this.formGroup.value;
      this.setStateProcessing();
      this._userUsecase
        .confirmPassword(password)
        .pipe(takeUntil(this.subject))
        .subscribe((result) => {
          if (result.isSuccess) {
            this.onChange.emit(true);
          } else {
            const error = result.getErrorValue() as string;
            if (error === HttpResponse.INVALID_PASSWORD) {
              this.formGroup.get('password')?.setErrors({
                message: error,
              });
            } else {
              console.error(error);
              this.globalService.toast.showError('Failed to validate password');
            }
          }
        });
    }
  }
}
