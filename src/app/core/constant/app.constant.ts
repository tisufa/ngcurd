export class AppConstant {
  public static instance: AppConstant;
  public readonly SESSION_ID = 'sid';
  private constructor() {}
  public static create(): AppConstant {
    if (this.instance) return this.instance;
    this.instance = new AppConstant();
    return this.instance;
  }
}
