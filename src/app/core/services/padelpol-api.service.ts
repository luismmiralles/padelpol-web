import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { PaddleLevelApiResponse } from '../models/interfaces/paddle-level-api-response';

@Injectable({
  providedIn: 'root'
})
export class PadelpolApiService {

  constructor(private http: HttpClient) { }

  getPaddleLevels(): Observable<PaddleLevelApiResponse[]> {
    return this.http.get<PaddleLevelApiResponse[]>(`${config.apiUrl}/paddle-levels`);
  }
}
