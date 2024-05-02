import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpResponse, Result } from '../domains';
import { UserRequestDTO, UserResponseDTO } from '../dtos';
import { UserModel } from '../models';
import { UserService } from '../services/user.service';
@Injectable({ providedIn: 'root' })
export class UserUsecase {
  constructor(private _userService: UserService) {}
  public me(): Observable<Result<UserModel | string>> {
    return this._userService.me().pipe(
      map((successResponse) => Result.ok(UserModel.create(successResponse))),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(Result.fail(errorResponse.error));
      })
    );
  }

  public update(model: UserModel): Observable<Result<UserModel | string>> {
    const dto = UserRequestDTO.create(model);
    return this._userService.update(dto).pipe(
      map((successResponse) => Result.ok(UserModel.create(successResponse))),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(Result.fail(errorResponse.error));
      })
    );
  }

  public delete(userId: string): Observable<Result<UserModel | string>> {
    return this._userService.delete(userId).pipe(
      map((successResponse) => Result.ok(UserModel.create(successResponse))),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(Result.fail(errorResponse.error));
      })
    );
  }

  public confirmPassword(password: string): Observable<Result<null | string>> {
    return this._userService.confirmPassword(password).pipe(
      map((responseDTOs: UserResponseDTO[]) => {
        if (responseDTOs.length > 0) {
          return Result.ok(null);
        } else {
          return Result.fail(HttpResponse.INVALID_PASSWORD);
        }
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(Result.fail(errorResponse.message));
      })
    );
  }
}
