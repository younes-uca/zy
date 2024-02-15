import {RoleDto} from "src/app/shared/dto/security/RoleDto";
import {ModelPermissionUserDto} from "src/app/shared/dto/security/ModelPermissionUserDto";
import {ModelPermissionDto} from "src/app/shared/dto/security/ModelPermissionDto";
import {RoleUserDto} from "src/app/shared/dto/security/RoleUserDto";
import {ActionPermissionDto} from "src/app/shared/dto/security/ActionPermissionDto";

export class UserDto {
    public id: number;
    public credentialsNonExpired: boolean;
    public enabled: boolean;
    public email: string;
    public accountNonExpired: boolean;
    public accountNonLocked: boolean;
    public username: string;
    public password: string;
    public passwordChanged: boolean;
    public lastName: string;
    public firstName: string;
    public phone: string;

    public roleUsers: RoleUserDto[];
    public modelPermissionUsers: ModelPermissionUserDto[];

    constructor(id?: number) {
        this.id = id;
    }



}
