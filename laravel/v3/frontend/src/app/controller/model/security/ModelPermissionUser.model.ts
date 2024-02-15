import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {UserDto} from './User.model';
import {ModelPermissionDto} from './ModelPermission.model';
import {ActionPermissionDto} from './ActionPermission.model';

export class ModelPermissionUserDto extends BaseDto{

   public value: null | boolean;

    public subAttribute: string;

    public actionPermission: ActionPermissionDto ;
    public modelPermission: ModelPermissionDto ;
    public user: UserDto ;
    

    constructor() {
        super();

        this.value = null;
        this.subAttribute = '';

        }

}
