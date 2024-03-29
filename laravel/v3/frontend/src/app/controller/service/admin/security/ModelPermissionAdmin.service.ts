import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ModelPermissionDto} from 'src/app/controller/model/security/ModelPermission.model';
import {ModelPermissionCriteria} from 'src/app/controller/criteria/security/ModelPermissionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ModelPermissionAdminService extends AbstractService<ModelPermissionDto, ModelPermissionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/modelPermission/');
    }

    public constrcutDto(): ModelPermissionDto {
        return new ModelPermissionDto();
    }

    public constrcutCriteria(): ModelPermissionCriteria {
        return new ModelPermissionCriteria();
    }
}
