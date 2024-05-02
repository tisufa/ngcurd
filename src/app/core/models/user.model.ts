import { UserResponseDTO } from '../dtos';

export class UserModel {
  public id: string;
  public username: string;
  public email: string;
  public password: string;
  public roleName: string;
  private constructor() {}
  public static create(dto: UserResponseDTO): UserModel {
    const model = new UserModel();
    model.id = dto.id;
    model.username = dto.username;
    model.email = dto.email;
    model.password = dto.password;
    model.roleName = dto.roleName;
    return model;
  }

  public static createEmpty(): UserModel {
    return new UserModel();
  }
}
