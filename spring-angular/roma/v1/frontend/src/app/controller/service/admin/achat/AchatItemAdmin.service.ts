import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {AchatItemDto} from 'src/app/controller/model/achat/AchatItem.model';
import {AchatItemCriteria} from 'src/app/controller/criteria/achat/AchatItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class AchatItemAdminService extends AbstractService<AchatItemDto, AchatItemCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/achatItem/');
    }

    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }
    public constrcutDto(): AchatItemDto {
        return new AchatItemDto();
    }

    public constrcutCriteria(): AchatItemCriteria {
        return new AchatItemCriteria();
    }
}
