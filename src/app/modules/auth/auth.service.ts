import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from 'src/app/core/domains';
import { UserResponseDTO } from 'src/app/core/dtos';
import { SignUpRequestDTO, SignUpResponseDTO } from './shared/dtos';
@Injectable()
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  public signIn(
    params: HttpParams
  ): Observable<HttpResponse<UserResponseDTO[]>> {
    return this._httpClient.get<UserResponseDTO[]>('/users', {
      params,
      observe: 'response',
    });
  }

  public signUp(dto: SignUpRequestDTO): Observable<SignUpResponseDTO> {
    return this._httpClient.post<SignUpResponseDTO>('/users', dto);
  }
}
