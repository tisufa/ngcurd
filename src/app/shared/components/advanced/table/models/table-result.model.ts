import { HttpResponse } from '@angular/common/http';

export class TableResultModel {
  public data: any[];
  public totalData: number;
  private constructor() {}
  public static create(response: HttpResponse<any[]>): TableResultModel {
    const model = new TableResultModel();
    model.data = response.body || [];
    model.totalData = +(
      response.headers.get('x-total-count') || `${model.data.length}`
    );
    return model;
  }
}
