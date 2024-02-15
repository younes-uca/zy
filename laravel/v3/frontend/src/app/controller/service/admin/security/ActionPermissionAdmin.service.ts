import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ActionPermissionDto} from 'src/app/controller/model/security/ActionPermission.model';
import {ActionPermissionCriteria} from 'src/app/controller/criteria/security/ActionPermissionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ActionPermissionAdminService extends AbstractService<ActionPermissionDto, ActionPermissionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/actionPermission/');
    }

    public constrcutDto(): ActionPermissionDto {
        return new ActionPermissionDto();
    }

    public constrcutCriteria(): ActionPermissionCriteria {
        return new ActionPermissionCriteria();
    }
}
