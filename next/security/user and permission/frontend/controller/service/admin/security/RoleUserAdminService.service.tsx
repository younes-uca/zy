import { ADMIN_URL } from '@/layout/AppConfig';
import AbstractService from "@/utils/zynerator/service/AbstractService";

import {RoleUserDto} from '@/controller/model/security/RoleUser.model';
import {RoleUserCriteria} from '@/controller/criteria/security/RoleUserCriteria.model';

export class RoleUserAdminService extends AbstractService<RoleUserDto, RoleUserCriteria>{

    constructor() {
        super(ADMIN_URL , 'roleUser/');
    }

};
