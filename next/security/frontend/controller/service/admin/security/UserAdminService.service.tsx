import { ADMIN_URL } from '@/layout/AppConfig';
import AbstractService from "@/utils/zynerator/service/AbstractService";

import {UserDto} from '@/controller/model/security/User.model';
import {UserCriteria} from '@/controller/criteria/security/UserCriteria.model';

export class UserAdminService extends AbstractService<UserDto, UserCriteria>{

    constructor() {
        super(ADMIN_URL , 'user/');
    }

};
