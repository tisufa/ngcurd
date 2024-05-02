import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseModule } from 'src/app/core/base';
import { UserResponseDTO } from 'src/app/core/dtos';
import { UserModel } from 'src/app/core/models';
import { UserUsecase } from 'src/app/core/usecase';
import { PopupConfirmPasswordService } from 'src/app/shared/components/advanced/popup';
import { TableModel } from 'src/app/shared/components/advanced/table';
import { PopupEditUserService } from './components/popup-edit-user';

@Component({
  templateUrl: './admin.component.html',
})
export class AdminComponent extends BaseModule {
  public tableModel: TableModel<any>;
  constructor(
    private _popupConfirmPassword: PopupConfirmPasswordService,
    private _userUsecase: UserUsecase,
    private _popupEditUserService: PopupEditUserService
  ) {
    super('admin');
  }

  protected override onInit(): void {
    this.buildTable();
    this.setStateReady();
  }

  private buildTable(): void {
    this.tableModel = TableModel.create(this.moduleCode, [
      {
        header: 'ID',
        field: 'id',
      },
      {
        header: 'Username',
        field: 'username',
      },
      {
        header: 'Email',
        field: 'email',
      },
      {
        header: 'Role',
        field: 'roleName',
      },
    ]);
  }

  protected handleEdit(record: UserResponseDTO): void {
    const model = UserModel.create(record);
    this._popupEditUserService.open(model).subscribe((result: boolean) => {
      if (!result) return;
      this.tableModel.reload();
    });
  }

  protected handleDelete(record: UserResponseDTO): void {
    this.globalService.modal
      .deleteConfirmation()
      .subscribe((isDeletedConfirm) => {
        if (!isDeletedConfirm) return;
        this._popupConfirmPassword
          .open()
          .subscribe((isValidPassword: boolean) => {
            if (!isValidPassword) return;
            this._userUsecase
              .delete(record.id)
              .pipe(takeUntil(this.subject))
              .subscribe((result) => {
                if (result.isSuccess) {
                  this.globalService.toast.showSuccess(
                    `Successfully to delete ${record.username}`
                  );
                  this.tableModel.reload();
                } else {
                  const error = result.getErrorValue();
                  console.error(error);
                  this.globalService.toast.showError('Failed to delete user');
                }
              });
          });
      });
  }
}
