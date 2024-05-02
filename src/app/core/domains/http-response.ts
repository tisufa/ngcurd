import { HttpResponse as AngularHttpResponse } from '@angular/common/http';

export class HttpResponse<T> extends AngularHttpResponse<T> {
  public static BAD_REQUEST = 400;
  public static INTERNAL_SERVER_ERROR = 500;
  public static UNAUTHORIZED = 401;

  public static INVALID_USERNAME_OR_PASSWORD = 'Invalid username or password';
  public static INVALID_PASSWORD = 'Invalid password';
}
