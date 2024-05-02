import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopupService } from '../popup.service';
import { PopupConfirmPasswordComponent } from './popup-confirm-password.component';

@Injectable()
export class PopupConfirmPasswordService {
  constructor(private _popupService: PopupService) {}
  public open(): Observable<boolean> {
    return this._popupService.open(PopupConfirmPasswordComponent, {});
  }
}
