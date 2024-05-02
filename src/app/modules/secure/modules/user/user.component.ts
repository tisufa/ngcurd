import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseModule } from 'src/app/core/base';
import { Result } from 'src/app/core/domains';
import {
  InviniteScrollModel,
  InviniteScrollResultModel,
} from 'src/app/shared/models';
import { UserPhotosModel } from './models/user-photos.model';
import { UserUsecase } from './user.usecase';

type GetPhotosResponse =
  | HttpErrorResponse
  | InviniteScrollResultModel<UserPhotosModel[]>;

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent extends BaseModule {
  public inviniteScroll: InviniteScrollModel;
  public photos: UserPhotosModel[];
  public totalData: number;
  constructor(private _usecase: UserUsecase) {
    super('user');
  }

  protected override onInit(): void {
    this.setStateInitialization();
    this.getUserPhotos();
  }

  private setStateInitialization(): void {
    this.inviniteScroll = InviniteScrollModel.create();
    this.photos = [];
  }

  private getUserPhotos(): void {
    this._usecase
      .getPhotos(this.inviniteScroll)
      .pipe(takeUntil(this.subject))
      .subscribe((result: Result<GetPhotosResponse>) => {
        this.setStateReady();
        if (result.isSuccess) {
          const { data, totalData } =
            result.getValue() as InviniteScrollResultModel<UserPhotosModel[]>;
          this.photos.push(...data);
          this.totalData = totalData;
        } else {
          const error = result.getErrorValue() as HttpErrorResponse;
          console.error(error.message);
        }
      });
  }

  protected handleLoadMore(): void {
    if (this.isProcessing || this.totalData === this.photos.length) return;
    this.inviniteScroll.next();
    this.setStateProcessing();
    this.getUserPhotos();
  }
}
