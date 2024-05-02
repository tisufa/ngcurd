import { IEnvirontment } from '../interfaces';

export class Config {
  public backendAddress: string;
  private constructor() {}
  public static create(environment: IEnvirontment): Config {
    const config = new Config();
    config.backendAddress = environment.backendAddress;
    return config;
  }
}
