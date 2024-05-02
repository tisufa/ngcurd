import { IEnvirontment } from '../interfaces';
export class ConfigModel {
  public backendAddress: string;
  public environtment: IEnvirontment;
  private constructor() {}
  public static createEmpty(): ConfigModel {
    const model = new ConfigModel();
    return model;
  }
}
