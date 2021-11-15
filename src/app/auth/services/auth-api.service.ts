import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaddleLevelApiResponse } from '../interfaces/paddle-level-api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }

  getPaddleLevels(): Observable<PaddleLevelApiResponse[]>{
    return this.http.get<PaddleLevelApiResponse[]>("http://padelpol.herokuapp.com/api/paddle-levels");
  }
}
