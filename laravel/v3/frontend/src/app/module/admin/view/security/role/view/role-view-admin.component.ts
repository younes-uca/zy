import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {RoleAdminService} from 'src/app/controller/service/admin/security/RoleAdmin.service';
import {RoleDto} from 'src/app/controller/model/security/Role.model';
import {RoleCriteria} from 'src/app/controller/criteria/security/RoleCriteria.model';

@Component({
  selector: 'app-role-view-admin',
  templateUrl: './role-view-admin.component.html'
})
export class RoleViewAdminComponent extends AbstractViewController<RoleDto, RoleCriteria, RoleAdminService> implements OnInit {


    constructor(private roleService: RoleAdminService){
        super(roleService);
    }

    ngOnInit(): void {
    }




}
