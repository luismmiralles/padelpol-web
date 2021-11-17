import { PaddleLevelApiResponse } from "src/app/core/models/interfaces/paddle-level-api-response";

export class User {
    id: number;
    rol: string;
    name: string;
    email: string;
    paddle_level: PaddleLevelApiResponse;

    constructor(data: User) {
        Object.assign(this, data);
    }
}
