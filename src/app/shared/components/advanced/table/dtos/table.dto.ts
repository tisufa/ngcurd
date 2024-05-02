import { HttpParams } from '@angular/common/http';
import { TableModel } from '../models';

export class TableRequestDTO {
  private constructor() {}
  public static createHttpParams(model: TableModel<any>): HttpParams {
    return new HttpParams({
      fromObject: {
        _page: model.page,
        _limit: model.perPage,
      },
    });
  }
}
