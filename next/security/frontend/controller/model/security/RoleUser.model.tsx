import {BaseDto} from "@/utils/zynerator/dto/BaseDto.model";

import {UserDto} from '@/controller/model/security/User.model';
import {RoleDto} from '@/controller/model/security/Role.model';

export class RoleUserDto extends BaseDto{

    public user: null | UserDto ;
    public role: null | RoleDto ;


    constructor() {
        super();
        this.user = null;
        this.role = null;
        }

    getClassName() {
        return "Role user";
    }
}
