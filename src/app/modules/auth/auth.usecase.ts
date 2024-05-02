import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpResponse, Result } from 'src/app/core/domains';
import { User } from 'src/app/core/domains/user';
import { UserResponseDTO } from 'src/app/core/dtos';
import { GlobalService } from 'src/app/core/global';
import { UserModel } from 'src/app/core/models';
import { AuthService } from './auth.service';
import {
  SignInRequestDTO,
  SignUpRequestDTO,
  SignUpResponseDTO,
} from './shared/dtos';
import { SignInModel, SignUpModel } from './shared/models';
@Injectable()
export class AuthUsecase {
  constructor(
    private _service: AuthService,
    private _globalService: GlobalService
  ) {}
  public signIn(
    model: SignInModel
  ): Observable<Result<string | HttpErrorResponse | null>> {
    const params = SignInRequestDTO.createHttpParams(model);
    return this._service.signIn(params).pipe(
      map((successResponse) => {
        const dtos = successResponse.body as UserResponseDTO[];
        if (dtos.length === 0) {
          return Result.fail(HttpResponse.INVALID_USERNAME_OR_PASSWORD);
        } else {
          const userModel = UserModel.create(dtos[0]);
          this._globalService.session.setSessionId(userModel.id);
          this._globalService.session.user = User.create(userModel);
          return Result.ok(null);
        }
      }),
      catchError((errorResponse: HttpErrorResponse) =>
        of(Result.fail(errorResponse.error))
      )
    );
  }
  public signUp(model: SignUpModel): Observable<Result<any>> {
    const dto = SignUpRequestDTO.create(model);
    return this._service.signUp(dto).pipe(
      map((responseDTO: SignUpResponseDTO) => {
        const dto = responseDTO as SignUpResponseDTO;
        const userModel = UserModel.create(dto);
        this._globalService.session.user = User.create(userModel);
        this._globalService.session.setSessionId(dto.id);
        return Result.ok();
      }),
      catchError((errorResponse: HttpErrorResponse) =>
        of(Result.fail(errorResponse))
      )
    );
  }
}
