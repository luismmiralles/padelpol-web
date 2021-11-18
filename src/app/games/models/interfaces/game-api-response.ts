import { PaddleLevelApiResponse } from "src/app/core/models/interfaces/paddle-level-api-response"
import { User } from "src/app/core/models/user"

export interface GameApiResponse {
    id: number,
    location: string,
    date: string,
    duration: number,
    court_price: number,
    paddle_level: PaddleLevelApiResponse,
    player1: User,
    player2: User | null,
    player3: User | null,
    player4: User | null
}
