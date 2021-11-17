import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginApiRequest } from '../interfaces/login-api-request';
import { LoginApiResponse } from '../interfaces/login-api-response';
import { PaddleLevelApiResponse } from '../../core/models/interfaces/paddle-level-api-response';
import { RegisterApiRequest } from '../interfaces/register-api-request';
import { RegisterApiRsponse } from '../interfaces/register-api-rsponse';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }

  getPaddleLevels(): Observable<PaddleLevelApiResponse[]>{
    return this.http.get<PaddleLevelApiResponse[]>("http://padelpol.herokuapp.com/api/paddle-levels");
  }

  login(params: LoginApiRequest): Observable<LoginApiResponse>{
    return this.http.post<LoginApiResponse>("http://padelpol.herokuapp.com/api/auth/login", params);
  }

  register(params: RegisterApiRequest): Observable<RegisterApiRsponse>{
    return this.http.post<RegisterApiRsponse>("http://padelpol.herokuapp.com/api/auth/register", params);
  }

}
