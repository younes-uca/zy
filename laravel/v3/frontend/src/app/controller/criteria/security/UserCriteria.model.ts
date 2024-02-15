import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {ModelPermissionUserCriteria} from './ModelPermissionUserCriteria.model';
import {RoleUserCriteria} from './RoleUserCriteria.model';

export class UserCriteria  extends BaseCriteria  {

    public id: number;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public email: string;
    public emailLike: string;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public username: string;
    public usernameLike: string;
    public password: string;
    public passwordLike: string;
    public passwordChanged: null | boolean;
    public lastName: string;
    public lastNameLike: string;
    public firstName: string;
    public firstNameLike: string;
    public phone: string;
    public phoneLike: string;
      public roleUsers: Array<RoleUserCriteria>;
      public modelPermissionUsers: Array<ModelPermissionUserCriteria>;

}
