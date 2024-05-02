export class InviniteScrollModel {
  public page: number;
  public perPage: number;
  private constructor() {}
  public next(): void {
    this.page++;
  }

  public reset(): void {
    this.page = 1;
  }

  public static create(perPage?: number): InviniteScrollModel {
    const model = new InviniteScrollModel();
    model.page = 1;
    model.perPage = perPage || 10;
    return model;
  }
}
