import { UserPhotoResponseDTO } from '../dtos/user-photo.dto';
export class UserPhotosModel {
  public id: number;
  public thumbnailUrl: string;
  public title: string;
  public url: string;
  private constructor() {}
  public static create(dto: UserPhotoResponseDTO): UserPhotosModel {
    const model = new UserPhotosModel();
    model.id = dto.id;
    model.thumbnailUrl = dto.thumbnailUrl;
    model.title = dto.title;
    model.url = dto.url;
    return model;
  }

  public static createList(dtos: UserPhotoResponseDTO[]): UserPhotosModel[] {
    return (dtos || []).map((dto) => this.create(dto));
  }
}
