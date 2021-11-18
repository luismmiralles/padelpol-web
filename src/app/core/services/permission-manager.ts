import { Permission } from "../models/permission";

export class PermissionManager {

    private static roles: { [key: string]: Permission[] } = {
        "1": [],
        "2": [],
        "3": [],
        "4": [],
        "5": [],
        "6": ["UPDATE_GAME"],
        "7": ["UPDATE_GAME"],
        "8": ["UPDATE_GAME"],
        "9": ["UPDATE_GAME"],
        "10": ["UPDATE_GAME", "DELETE_GAME"],
    }

    static allow(rol: string, permission: Permission): boolean {
        return this.roles[rol].includes(permission);
    }
}
