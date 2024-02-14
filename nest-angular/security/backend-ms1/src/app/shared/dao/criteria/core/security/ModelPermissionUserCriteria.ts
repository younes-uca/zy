import {BaseCriteria} from "src/app/zynerator/criteria/BaseCriteria";

import {UserCriteria} from "src/app/shared/dao/criteria/core/security/UserCriteria";
import {ModelPermissionCriteria} from "src/app/shared/dao/criteria/core/security/ModelPermissionCriteria";
import {ActionPermissionCriteria} from "src/app/shared/dao/criteria/core/security/ActionPermissionCriteria";


export class ModelPermissionUserCriteria extends  BaseCriteria  {

    public value: boolean ;
    public subAttribute: string;
    public subAttributeLike: string;

    public actionPermission: ActionPermissionCriteria;
    public actionPermissions: Array<ActionPermissionCriteria>;
    public modelPermission: ModelPermissionCriteria;
    public modelPermissions: Array<ModelPermissionCriteria>;
    public user: UserCriteria;
    public users: Array<UserCriteria>;

    public constructor(){
        super();
    }
}
