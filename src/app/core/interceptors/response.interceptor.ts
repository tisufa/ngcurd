import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TOAST_CONFIG } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';
import { HttpResponse } from '../domains';
import { IToast } from '../interfaces';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(@Inject(TOAST_CONFIG) private _toast: IToast) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        next: (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.Response) {
            console.log(event);
          }
        },
        error: (errorResponse: HttpErrorResponse) => {
          if (errorResponse.status === HttpResponse.INTERNAL_SERVER_ERROR) {
            this._toast.showError(`Internal Server Error`);
          } else if (errorResponse.status === HttpResponse.UNAUTHORIZED) {
            this._toast.showError(`Session Expired`);
          }
        },
      })
    );
  }
}
