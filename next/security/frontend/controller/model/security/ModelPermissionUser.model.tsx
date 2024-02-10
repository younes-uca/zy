import {BaseDto} from "@/utils/zynerator/dto/BaseDto.model";

import {UserDto} from '@/controller/model/security/User.model';
import {ModelPermissionDto} from '@/controller/model/security/ModelPermission.model';
import {ActionPermissionDto} from '@/controller/model/security/ActionPermission.model';

export class ModelPermissionUserDto extends BaseDto{

   public value: boolean;

    public subAttribute: string;

    public actionPermission: null | ActionPermissionDto ;
    public modelPermission: null | ModelPermissionDto ;
    public user: null | UserDto ;


    constructor() {
        super();
        this.value = null;
        this.subAttribute = '';
        this.actionPermission = null;
        this.modelPermission = null;
        this.user = null;
        }

    getClassName() {
        return "Model permission user";
    }
}
