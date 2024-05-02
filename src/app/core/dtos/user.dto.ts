import { UserModel } from '../models';

export class UserResponseDTO {
  public id: string;
  public username: string;
  public email: string;
  public password: string;
  public roleName: string;
  private constructor() {}
}

export class UserRequestDTO {
  public id: string;
  public username: string;
  public email: string;
  public password: string;
  public roleName: string;
  private constructor() {}

  public static create(model: UserModel): UserRequestDTO {
    const dto = new UserRequestDTO();
    dto.id = model.id;
    dto.username = model.username;
    dto.email = model.email;
    if (dto.password) {
      dto.password = model.password;
    }
    dto.roleName = model.roleName;
    return dto;
  }
}
