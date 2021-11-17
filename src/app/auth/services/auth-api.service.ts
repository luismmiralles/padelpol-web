import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/core/config';
import { LoginApiRequest } from '../interfaces/login-api-request';
import { LoginApiResponse } from '../interfaces/login-api-response';
import { RegisterApiRequest } from '../interfaces/register-api-request';
import { RegisterApiRsponse } from '../interfaces/register-api-rsponse';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }

  login(params: LoginApiRequest): Observable<LoginApiResponse> {
    return this.http.post<LoginApiResponse>(`${config.apiUrl}/auth/login`, params);
  }

  register(params: RegisterApiRequest): Observable<RegisterApiRsponse> {
    return this.http.post<RegisterApiRsponse>(`${config.apiUrl}/auth/register`, params);
  }

}
