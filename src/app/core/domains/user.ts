import { UserModel } from '../models';

export class User {
  public model: UserModel;
  private constructor() {}
  public static create(model: UserModel): User {
    const user = new User();
    user.model = model;
    return user;
  }

  public static createEmpty(): User {
    const user = new User();
    user.model = UserModel.createEmpty();
    return user;
  }
}
