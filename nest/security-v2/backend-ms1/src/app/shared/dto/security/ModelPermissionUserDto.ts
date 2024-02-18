import {UserDto} from "src/app/shared/dto/security/UserDto";
import {ModelPermissionDto} from "src/app/shared/dto/security/ModelPermissionDto";
import {ActionPermissionDto} from "src/app/shared/dto/security/ActionPermissionDto";

export class ModelPermissionUserDto {
    public id: number;
    public value: boolean;
    public subAttribute: string;

    public actionPermission: ActionPermissionDto;
    public modelPermission: ModelPermissionDto;
    public user: UserDto;

    constructor(id?: number) {
        this.id = id;
    }



}
