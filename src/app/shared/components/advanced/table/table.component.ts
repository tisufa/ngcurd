import { HttpErrorResponse } from '@angular/common/http';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base-component';
import { Result } from 'src/app/core/domains';
import { TableModel } from './models';
import { TableResultModel } from './models/table-result.model';
import { TableUsecase } from './table.usecase';

type TableResultResponse = Result<TableResultModel | HttpErrorResponse>;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseComponent {
  @Input() header: string;
  @Input() model: TableModel<any>;
  @Input() stringUrl: string;
  @ContentChild('actionButtons') actionButtonsTmpl: TemplateRef<any>;

  public sortField: string;
  public sortOrder: string;

  public records: Array<any>;
  public totalPage: number;
  constructor(private _usecase: TableUsecase) {
    super('table');
  }

  protected override onInit(): void {
    this.resolveRecords();
    this.listenRequestReload();
  }

  private resolveRecords(): void {
    this._usecase
      .getRecords(this.model, this.stringUrl)
      .pipe(takeUntil(this.subject))
      .subscribe((result: TableResultResponse) => {
        this.setStateReady();
        if (result.isSuccess) {
          const resultModel = result.getValue() as TableResultModel;
          this.records = resultModel.data;
          this.totalPage = Math.ceil(
            resultModel.totalData / this.model.perPage
          );
        } else {
          const error = result.getErrorValue();
          console.error(error);
        }
      });
  }

  private listenRequestReload(): void {
    this.model.requestReload.pipe(takeUntil(this.subject)).subscribe(() => {
      this.resolveRecords();
    });
  }

  public handlePrevious(): void {
    this.model.page--;
    this.setStateProcessing();
    this.resolveRecords();
  }

  public handleNext(): void {
    this.model.page++;
    this.setStateProcessing();
    this.resolveRecords();
  }
}
