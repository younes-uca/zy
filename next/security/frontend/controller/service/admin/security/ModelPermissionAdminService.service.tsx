import { ADMIN_URL } from '@/layout/AppConfig';
import AbstractService from "@/utils/zynerator/service/AbstractService";

import {ModelPermissionDto} from '@/controller/model/security/ModelPermission.model';
import {ModelPermissionCriteria} from '@/controller/criteria/security/ModelPermissionCriteria.model';

export class ModelPermissionAdminService extends AbstractService<ModelPermissionDto, ModelPermissionCriteria>{

    constructor() {
        super(ADMIN_URL , 'modelPermission/');
    }

};
