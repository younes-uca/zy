import {BaseCriteria} from "@/utils/zynerator/criteria/BaseCriteria.model";

import {UserCriteria} from '@/controller/criteria/security/UserCriteria.model';
import {ModelPermissionCriteria} from '@/controller/criteria/security/ModelPermissionCriteria.model';
import {ActionPermissionCriteria} from '@/controller/criteria/security/ActionPermissionCriteria.model';

export class ModelPermissionUserCriteria  extends  BaseCriteria {

    public id: number | null;;

    public value: null | boolean;
    public subAttribute: string;
    public subAttributeLike: string;
    public actionPermission: ActionPermissionCriteria ;
    public actionPermissions: Array<ActionPermissionCriteria> ;
    public modelPermission: ModelPermissionCriteria ;
    public modelPermissions: Array<ModelPermissionCriteria> ;
    public user: UserCriteria ;
    public users: Array<UserCriteria> ;


    constructor() {
        super();
        this.id=null;
        this.value = null;
        this.subAttribute = '';
        this.subAttributeLike = '';
        this.actionPermission = new ActionPermissionCriteria();
        this.actionPermissions = new Array<ActionPermissionCriteria>() ;
        this.modelPermission = new ModelPermissionCriteria();
        this.modelPermissions = new Array<ModelPermissionCriteria>() ;
        this.user = new UserCriteria();
        this.users = new Array<UserCriteria>() ;
    }

}
