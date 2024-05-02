import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseDTO } from '../dtos';
import { GlobalService } from '../global';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private _httpClient: HttpClient,
    private _globalService: GlobalService
  ) {}
  public me(): Observable<UserResponseDTO> {
    return this._httpClient.get<UserResponseDTO>(
      `/users/${this._globalService.session.sessionId}`
    );
  }

  public update(dto: UserResponseDTO): Observable<any> {
    return this._httpClient.put(`/users/${dto.id}`, dto);
  }

  public delete(userId: string): Observable<any> {
    return this._httpClient.delete(`/users/${userId}`);
  }

  public confirmPassword(password: string): Observable<any> {
    return this._httpClient.get(
      `/users?password=${password}&id=${this._globalService.session.sessionId}`
    );
  }
}
