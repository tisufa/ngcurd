import { EventEmitter } from '@angular/core';
import { TableColumnModel } from './table-coumn.model';

export class TableModel<T> {
  public records: T[];
  public perPage: number;
  public page: number;
  public requestReload: EventEmitter<void>;
  private constructor(
    public moduleCode: string,
    public columns: TableColumnModel[]
  ) {}

  public reload(): void {
    this.requestReload.emit();
  }

  public static create<U>(
    moduleCode: string,
    columns: TableColumnModel[]
  ): TableModel<U> {
    const model = new TableModel<U>(moduleCode, columns);
    model.records = [];
    model.page = 1;
    model.perPage = 10;
    model.requestReload = new EventEmitter();
    return model;
  }
}
