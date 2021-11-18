import { PaddleLevelApiResponse } from "src/app/core/models/interfaces/paddle-level-api-response";
import { PermissionManager } from "../services/permission-manager";
import { Permission } from "./permission";

export class User {
    id: number;
    rol: string;
    name: string;
    email: string;
    paddle_level: PaddleLevelApiResponse;

    constructor(data: User) {
        Object.assign(this, data);
    }

    can(permission: Permission) {
        return PermissionManager.allow(this.rol.toString(), permission);
    }
}
