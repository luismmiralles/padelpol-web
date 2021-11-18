import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { config } from 'src/app/core/config';
import { GameApiResponse } from '../models/interfaces/game-api-response';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<GameApiResponse[]>(`${config.apiUrl}/games`).pipe(
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
