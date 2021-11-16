import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaddleLevelApiResponse } from '../interfaces/paddle-level-api-response';
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

  register(params: RegisterApiRequest): Observable<RegisterApiRsponse>{
    return this.http.post<RegisterApiRsponse>("http://padelpol.herokuapp.com/api/auth/register", params);
  }
}
