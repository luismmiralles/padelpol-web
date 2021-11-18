import { PaddleLevelApiResponse } from "src/app/core/models/interfaces/paddle-level-api-response";
import { User } from "src/app/core/models/user";

export class Game {

    id?: number;
    location: string;
    fecha: string;
    courtPrice: number;
    duration: number;
    paddleLeve: PaddleLevelApiResponse;
    player1: User;
    player2?: User;
    player3?: User;
    player4?: User;

    constructor(data: Game) {
        Object.assign(this, data);
    }
}
