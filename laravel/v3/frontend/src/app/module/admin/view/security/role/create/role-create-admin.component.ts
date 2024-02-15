import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {RoleAdminService} from 'src/app/controller/service/admin/security/RoleAdmin.service';
import {RoleDto} from 'src/app/controller/model/security/Role.model';
import {RoleCriteria} from 'src/app/controller/criteria/security/RoleCriteria.model';
@Component({
  selector: 'app-role-create-admin',
  templateUrl: './role-create-admin.component.html'
})
export class RoleCreateAdminComponent extends AbstractCreateController<RoleDto, RoleCriteria, RoleAdminService>  implements OnInit {




    constructor( private roleService: RoleAdminService ) {
        super(roleService);
    }

    ngOnInit(): void {
    }





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
