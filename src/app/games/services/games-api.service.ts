import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { config } from 'src/app/core/config';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { Game } from '../models/game';
import { GameApiResponse } from '../models/interfaces/game-api-response';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) { }

  getGames(): Observable<Game[]> {
    return this.http.get<GameApiResponse[]>(`${config.apiUrl}/games`, {
      headers: { Authorization: `Bearer ${this.sessionStorageService.getItem("token")}` }
    }).pipe(
      map((res: GameApiResponse[]) => {
        return res.map((g: GameApiResponse) => {
          return new Game(<Game>Object.assign(g, {
            paddleLevel: g.paddle_level,
            courtPrice: g.court_price
          }));
        });
      })
    );

  }
}
