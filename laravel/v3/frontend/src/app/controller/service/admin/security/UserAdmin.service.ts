import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {UserDto} from 'src/app/controller/model/security/User.model';
import {UserCriteria} from 'src/app/controller/criteria/security/UserCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class UserAdminService extends AbstractService<UserDto, UserCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/user/');
    }

    public constrcutDto(): UserDto {
        return new UserDto();
    }

    public constrcutCriteria(): UserCriteria {
        return new UserCriteria();
    }
}
