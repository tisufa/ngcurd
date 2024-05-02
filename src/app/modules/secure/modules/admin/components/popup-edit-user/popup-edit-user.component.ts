import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base-component';
import { RoleModel, UserModel } from 'src/app/core/models';
import { UserUsecase } from 'src/app/core/usecase';
import { Validators } from 'src/app/shared/validators';
@Component({
  templateUrl: './popup-edit-user.component.html',
})
export class PopupEditUserComponent extends BaseComponent {
  @Input() model: UserModel;
  @Output() onChange: EventEmitter<boolean>;
  public roles: RoleModel[];
  constructor(private _userUsecase: UserUsecase) {
    super('secure.module.admin.component.popup-edit-user');
    this.onChange = new EventEmitter();
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
      id: [this.model.id],
      username: [
        this.model.username,
        Validators.compose([
          Validators.required('Username is required'),
          Validators.minLength(2, 'Username should more than 2 characters'),
          Validators.maxLength(16, 'Username should less than 8 characters'),
          Validators.alphaNumeric('Username should be alphanumeric'),
        ]),
      ],
      email: [
        this.model.email,
        Validators.compose([
          Validators.required('Email is required'),
          Validators.email('Invalid email address'),
        ]),
      ],
      roleName: [this.model.roleName, Validators.required('Role is required')],
    });
  }

  public handleCancel(): void {
    this.onChange.emit(false);
  }

  public handleSubmit(): void {
    this.validate();
    if (this.formGroup.valid) {
      const model: UserModel = this.formGroup.value;
      this._userUsecase.update(model).subscribe((result) => {
        if (result.isSuccess) {
          this.globalService.toast.showSuccess('Successfully to updated user');
          this.onChange.emit(true);
        } else {
          const error = result.getErrorValue() as string;
          console.error(error);
          this.globalService.toast.showError('Failed to update user');
        }
      });
    }
  }
}
