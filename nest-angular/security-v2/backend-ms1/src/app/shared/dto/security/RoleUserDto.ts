import {UserDto} from "src/app/shared/dto/security/UserDto";
import {RoleDto} from "src/app/shared/dto/security/RoleDto";

export class RoleUserDto {
    public id: number;

    public user: UserDto;
    public role: RoleDto;

    constructor(id?: number) {
        this.id = id;
    }



}
