import { PaddleLevelApiResponse } from "./paddle-level-api-response";

export interface RegisterApiRsponse {
    id: number,
    name: string,
    email: string,
    paddle_level_id: number,
    paddle_level: PaddleLevelApiResponse,
    updated_at: string,
    created_at: string
}
