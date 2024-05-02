import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Result } from 'src/app/core/domains';
import { TableRequestDTO } from './dtos/table.dto';
import { TableModel } from './models';
import { TableResultModel } from './models/table-result.model';
import { TableService } from './table.service';
@Injectable()
export class TableUsecase {
  constructor(private _service: TableService) {}
  public getRecords(
    model: TableModel<any>,
    stringUrl: string
  ): Observable<Result<TableResultModel | HttpErrorResponse>> {
    const params = TableRequestDTO.createHttpParams(model);
    return this._service.getRecords(stringUrl, params).pipe(
      map((successResponse) => {
        const resultModel = TableResultModel.create(successResponse);
        return Result.ok(resultModel);
      }),
      catchError((errorResponse) => of(Result.fail(errorResponse)))
    );
  }
}
