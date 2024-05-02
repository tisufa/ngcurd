import { Injectable } from '@angular/core';
import { Config } from '../domains';
import { User } from '../domains/user';
import { GlobalService } from '../global/global.service';
import { ConfigModel, UserModel } from '../models';
import { UserUsecase } from '../usecase';

@Injectable()
export class InitializationService {
  private _isServer: boolean;
  constructor(
    private _globalService: GlobalService,
    private _userUsecase: UserUsecase
  ) {}

  public init(config: ConfigModel): Promise<boolean> {
    return new Promise(async (resolve) => {
      if (this._isServer) return resolve(true);
      console.debug('Initialization application start');
      await this.loadAndSetLocalConfiguration(config);
      await this.loadAndSetBackendConfiguration();
      console.debug('Initialization application complete');
      resolve(true);
    });
  }

  private loadAndSetLocalConfiguration(config: ConfigModel): Promise<boolean> {
    return new Promise((resolve) => {
      console.debug('Start load local configuration');
      // set global configuration
      this._globalService.config = Config.create(config);

      // read and set sessionId
      const sessionID: string | null = localStorage.getItem(
        this._globalService.constant.SESSION_ID
      );

      if (sessionID) {
        this._globalService.session.setSessionId(sessionID);
      }

      console.debug('End load local configuration');

      resolve(true);
    });
  }

  private loadAndSetBackendConfiguration(): Promise<void> {
    return new Promise((resolve) => {
      if (this._globalService.session.isLoggedIn) {
        this._userUsecase.me().subscribe((result) => {
          if (result.isSuccess) {
            const userModel = result.getValue() as UserModel;
            this._globalService.session.user = User.create(userModel);
          } else {
            const error = result.getErrorValue();
            console.error(error);
            this._globalService.session.destroy();
            this._globalService.toast.showError('Session expired');
          }
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
}
