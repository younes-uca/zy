import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {UserCriteria} from './UserCriteria.model';
import {ModelPermissionCriteria} from './ModelPermissionCriteria.model';
import {ActionPermissionCriteria} from './ActionPermissionCriteria.model';

export class ModelPermissionUserCriteria  extends BaseCriteria  {

    public id: number;
    public value: null | boolean;
    public subAttribute: string;
    public subAttributeLike: string;

}
