import { ADMIN_URL } from '@/layout/AppConfig';
import AbstractService from "@/utils/zynerator/service/AbstractService";

import {RoleDto} from '@/controller/model/security/Role.model';
import {RoleCriteria} from '@/controller/criteria/security/RoleCriteria.model';

export class RoleAdminService extends AbstractService<RoleDto, RoleCriteria>{

    constructor() {
        super(ADMIN_URL , 'role/');
    }

};
