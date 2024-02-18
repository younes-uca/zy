import {BaseCriteria} from "src/app/zynerator/criteria/BaseCriteria";

import {UserCriteria} from "src/app/shared/dao/criteria/core/security/UserCriteria";
import {RoleCriteria} from "src/app/shared/dao/criteria/core/security/RoleCriteria";


export class RoleUserCriteria extends  BaseCriteria  {


    public user: UserCriteria;
    public users: Array<UserCriteria>;
    public role: RoleCriteria;
    public roles: Array<RoleCriteria>;

    public constructor(){
        super();
    }
}
