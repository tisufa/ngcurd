import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class TableService {
  constructor(private _httpClient: HttpClient) {}
  public getRecords(
    stringUrl: string,
    params: HttpParams
  ): Observable<HttpResponse<any[]>> {
    return this._httpClient.get<any[]>(stringUrl, {
      params: params,
      observe: 'response',
    });
  }
}
