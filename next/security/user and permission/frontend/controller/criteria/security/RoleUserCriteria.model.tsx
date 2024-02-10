import {BaseCriteria} from "@/utils/zynerator/criteria/BaseCriteria.model";

import {UserCriteria} from '@/controller/criteria/security/UserCriteria.model';
import {RoleCriteria} from '@/controller/criteria/security/RoleCriteria.model';

export class RoleUserCriteria  extends  BaseCriteria {

    public id: number | null;;

    public user: UserCriteria ;
    public users: Array<UserCriteria> ;
    public role: RoleCriteria ;
    public roles: Array<RoleCriteria> ;


    constructor() {
        super();
        this.id=null;
        this.user = new UserCriteria();
        this.users = new Array<UserCriteria>() ;
        this.role = new RoleCriteria();
        this.roles = new Array<RoleCriteria>() ;
    }

}
