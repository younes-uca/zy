import {BaseDto} from "@/utils/zynerator/dto/BaseDto.model";

import {RoleDto} from '@/controller/model/security/Role.model';
import {ModelPermissionUserDto} from '@/controller/model/security/ModelPermissionUser.model';
import {ModelPermissionDto} from '@/controller/model/security/ModelPermission.model';
import {RoleUserDto} from '@/controller/model/security/RoleUser.model';
import {ActionPermissionDto} from '@/controller/model/security/ActionPermission.model';

export class UserDto extends BaseDto{

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

     public roleUsers: Array<RoleUserDto>;
     public modelPermissionUsers: Array<ModelPermissionUserDto>;


    constructor() {
        super();
        this.credentialsNonExpired = null;
        this.enabled = null;
        this.email = '';
        this.accountNonExpired = null;
        this.accountNonLocked = null;
        this.username = '';
        this.password = '';
        this.passwordChanged = null;
        this.lastName = '';
        this.firstName = '';
        this.phone = '';
        this.roleUsers = new Array<RoleUserDto>();
        this.modelPermissionUsers = new Array<ModelPermissionUserDto>();
        }

    getClassName() {
        return "User";
    }
}
