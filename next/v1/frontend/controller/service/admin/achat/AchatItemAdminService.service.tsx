import { ADMIN_URL } from '@/layout/AppConfig';
import AbstractService from "@/utils/zynerator/service/AbstractService";

import {AchatItemDto} from '@/controller/model/achat/AchatItem.model';
import {AchatItemCriteria} from '@/controller/criteria/achat/AchatItemCriteria.model';

export class AchatItemAdminService extends AbstractService<AchatItemDto, AchatItemCriteria>{

    constructor() {
        super(ADMIN_URL , 'achatItem/');
    }

};
