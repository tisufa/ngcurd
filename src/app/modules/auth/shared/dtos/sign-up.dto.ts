import { SignUpModel } from '../models';

class SignUpDTO {
  public username: string;
  public email: string;
  public password: string;
  public roleName: string;
  protected constructor() {}
}

export class SignUpRequestDTO extends SignUpDTO {
  public static create(model: SignUpModel): SignUpRequestDTO {
    const dto = new SignUpRequestDTO();
    dto.username = model.username;
    dto.email = model.email;
    dto.password = model.password;
    dto.roleName = model.roleName;
    return dto;
  }
}

export class SignUpResponseDTO extends SignUpDTO {
  public id: string;
}
