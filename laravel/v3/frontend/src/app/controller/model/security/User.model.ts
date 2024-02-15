import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ModelPermissionUserDto} from './ModelPermissionUser.model';
import {RoleUserDto} from './RoleUser.model';

export class UserDto extends BaseDto{

   public credentialsNonExpired: null | boolean;

   public enabled: null | boolean;

    public email: string;

   public accountNonExpired: null | boolean;

   public accountNonLocked: null | boolean;

    public username: string;

    public password: string;

   public passwordChanged: null | boolean;

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

}
