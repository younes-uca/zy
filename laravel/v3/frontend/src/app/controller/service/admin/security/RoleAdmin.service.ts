import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {RoleDto} from 'src/app/controller/model/security/Role.model';
import {RoleCriteria} from 'src/app/controller/criteria/security/RoleCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class RoleAdminService extends AbstractService<RoleDto, RoleCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/role/');
    }

    public constrcutDto(): RoleDto {
        return new RoleDto();
    }

    public constrcutCriteria(): RoleCriteria {
        return new RoleCriteria();
    }
}
