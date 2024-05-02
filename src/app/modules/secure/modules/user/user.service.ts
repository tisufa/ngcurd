import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPhotoResponseDTO } from './dtos/user-photo.dto';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}
  public getPhotos(
    httpParams: HttpParams
  ): Observable<HttpResponse<UserPhotoResponseDTO[]>> {
    return this._httpClient.get<UserPhotoResponseDTO[]>(
      `https://jsonplaceholder.typicode.com/photos`,
      {
        params: httpParams,
        observe: 'response',
      }
    );
  }
}
