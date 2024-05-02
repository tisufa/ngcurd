import { HttpParams } from '@angular/common/http';
import { SignInModel } from '../models';

export class SignInRequestDTO {
  public username: string;
  public password: string;
  private constructor() {}
  public static createHttpParams(model: SignInModel): HttpParams {
    return new HttpParams({
      fromObject: {
        username: model.username,
        password: model.password,
        _page: 1,
        _limit: 1,
      },
    });
  }
}
