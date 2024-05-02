import { Inject, Injectable } from '@angular/core';
import { AppConstant } from '../constant';
import { Config, Session } from '../domains';
import { IAlertDialog, IModal, IToast } from '../interfaces';
import { MODAL_CONFIG, TOAST_CONFIG } from '../token';
import { ALERT_DIALOG_CONFIG } from '../token/alert-dialog-config.token';

@Injectable({ providedIn: 'root' })
export class GlobalService {
  public session: Session;
  public config: Config;
  public constant: AppConstant;
  constructor(
    @Inject(TOAST_CONFIG) public toast: IToast,
    @Inject(MODAL_CONFIG) public modal: IModal,
    @Inject(ALERT_DIALOG_CONFIG) public alertDialog: IAlertDialog
  ) {
    this.session = Session.create();
    this.constant = AppConstant.create();
  }
}
