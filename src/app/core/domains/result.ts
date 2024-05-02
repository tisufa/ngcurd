export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: any;
  public value?: T;
  private constructor() {}

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error(
        "Can't get the value of an error result. Use 'errorValue' insted."
      );
    }

    return this.value as T;
  }

  public getErrorValue(): T {
    return this.error;
  }

  public static ok<U>(value?: U): Result<U> {
    const result = new Result<U>();
    result.value = value;
    result.error = null;
    result.isSuccess = true;
    result.isFailure = false;
    return result;
  }

  public static fail<U>(error: U): Result<U> {
    const result = new Result<U>();
    result.error = error;
    result.isSuccess = false;
    result.isFailure = true;
    return result;
  }
}
