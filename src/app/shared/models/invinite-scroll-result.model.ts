export class InviniteScrollResultModel<T> {
  public totalData: number;
  public data: T;
  private constructor() {}
  public static create<U>(
    data: U,
    totalData: number
  ): InviniteScrollResultModel<U> {
    const model = new InviniteScrollResultModel<U>();
    model.data = data;
    model.totalData = totalData || 0;
    return model;
  }

  public static createEmpty<U>(): InviniteScrollResultModel<U> {
    return new InviniteScrollResultModel<U>();
  }
}
