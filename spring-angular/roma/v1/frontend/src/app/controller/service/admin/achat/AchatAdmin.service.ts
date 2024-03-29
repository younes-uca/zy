import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {AchatDto} from 'src/app/controller/model/achat/Achat.model';
import {AchatCriteria} from 'src/app/controller/criteria/achat/AchatCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class AchatAdminService extends AbstractService<AchatDto, AchatCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/achat/');
    }

    getModelName(modelName: string): string {
        return this.modeleName = modelName;
    }
    public constrcutDto(): AchatDto {
        return new AchatDto();
    }

    public constrcutCriteria(): AchatCriteria {
        return new AchatCriteria();
    }
}
