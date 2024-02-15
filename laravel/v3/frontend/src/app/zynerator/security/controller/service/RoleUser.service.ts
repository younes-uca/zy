import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {RoleUserDto} from 'src/app/zynerator/security/controller/model/RoleUser.model';
import {RoleUserCriteria} from 'src/app/zynerator/security/controller/criteria/RoleUserCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {RoleService} from './Role.service';


@Injectable({
  providedIn: 'root'
})
export class RoleUserService extends AbstractService<RoleUserDto, RoleUserCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'roleUser/');
    }
    
    public constrcutDto(): RoleUserDto {
        return new RoleUserDto();
    }

    public constrcutCriteria(): RoleUserCriteria {
        return new RoleUserCriteria();
    }
}
