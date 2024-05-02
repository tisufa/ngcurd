import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Result } from 'src/app/core/domains';
import {
  InviniteScrollModel,
  InviniteScrollResultModel,
} from 'src/app/shared/models';
import {
  UserPhotoRequestDTO,
  UserPhotoResponseDTO,
} from './dtos/user-photo.dto';
import { UserPhotosModel } from './models/user-photos.model';
import { UserService } from './user.service';

@Injectable()
export class UserUsecase {
  constructor(private _service: UserService) {}
  public getPhotos(
    model: InviniteScrollModel
  ): Observable<
    Result<HttpErrorResponse | InviniteScrollResultModel<UserPhotosModel[]>>
  > {
    const httpParams = UserPhotoRequestDTO.createHttpParams(model);
    return this._service.getPhotos(httpParams).pipe(
      map((successResponse: HttpResponse<UserPhotoResponseDTO[]>) => {
        const xTotalCount = successResponse.headers.get('x-total-count');
        const totalData = +(xTotalCount || '0');
        const photoDTOs = successResponse.body || [];
        const models = UserPhotosModel.createList(photoDTOs);
        const resultModel = InviniteScrollResultModel.create<UserPhotosModel[]>(
          models,
          totalData
        );
        return Result.ok(resultModel);
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(Result.fail(errorResponse));
      })
    );
  }
}
