import { HttpParams } from '@angular/common/http';
import { InviniteScrollModel } from 'src/app/shared/models';

export class UserPhotoRequestDTO {
  constructor() {}
  public static createHttpParams(model: InviniteScrollModel): HttpParams {
    return new HttpParams({
      fromObject: {
        _page: model.page,
        _limit: model.perPage,
      },
    });
  }
}

export class UserPhotoResponseDTO {
  public albumId: number;
  public id: number;
  public thumbnailUrl: string;
  public title: string;
  public url: string;
  private constructor() {}
}
