import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {RoleUserDto} from 'src/app/controller/model/security/RoleUser.model';
import {RoleUserCriteria} from 'src/app/controller/criteria/security/RoleUserCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class RoleUserAdminService extends AbstractService<RoleUserDto, RoleUserCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/roleUser/');
    }

    public constrcutDto(): RoleUserDto {
        return new RoleUserDto();
    }

    public constrcutCriteria(): RoleUserCriteria {
        return new RoleUserCriteria();
    }
}
