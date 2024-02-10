import { ADMIN_URL } from '@/layout/AppConfig';
import AbstractService from "@/utils/zynerator/service/AbstractService";

import {ActionPermissionDto} from '@/controller/model/security/ActionPermission.model';
import {ActionPermissionCriteria} from '@/controller/criteria/security/ActionPermissionCriteria.model';

export class ActionPermissionAdminService extends AbstractService<ActionPermissionDto, ActionPermissionCriteria>{

    constructor() {
        super(ADMIN_URL , 'actionPermission/');
    }

};
