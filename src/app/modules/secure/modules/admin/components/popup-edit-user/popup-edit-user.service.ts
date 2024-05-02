import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models';
import { PopupService } from 'src/app/shared/components/advanced/popup';
import { PopupEditUserComponent } from './popup-edit-user.component';
@Injectable()
export class PopupEditUserService {
  constructor(private _popupService: PopupService) {}
  public open(model: UserModel): Observable<boolean> {
    return this._popupService.open(
      PopupEditUserComponent,
      { model },
      { backdrop: 'static' }
    );
  }
}
