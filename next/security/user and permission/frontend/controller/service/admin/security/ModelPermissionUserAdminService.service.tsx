import { ADMIN_URL } from '@/layout/AppConfig';
import AbstractService from "@/utils/zynerator/service/AbstractService";

import {ModelPermissionUserDto} from '@/controller/model/security/ModelPermissionUser.model';
import {ModelPermissionUserCriteria} from '@/controller/criteria/security/ModelPermissionUserCriteria.model';

export class ModelPermissionUserAdminService extends AbstractService<ModelPermissionUserDto, ModelPermissionUserCriteria>{

    constructor() {
        super(ADMIN_URL , 'modelPermissionUser/');
    }

};
