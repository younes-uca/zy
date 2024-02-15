import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ModelPermissionUserDto} from 'src/app/controller/model/security/ModelPermissionUser.model';
import {ModelPermissionUserCriteria} from 'src/app/controller/criteria/security/ModelPermissionUserCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ModelPermissionUserAdminService extends AbstractService<ModelPermissionUserDto, ModelPermissionUserCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/modelPermissionUser/');
    }

    public constrcutDto(): ModelPermissionUserDto {
        return new ModelPermissionUserDto();
    }

    public constrcutCriteria(): ModelPermissionUserCriteria {
        return new ModelPermissionUserCriteria();
    }
}
