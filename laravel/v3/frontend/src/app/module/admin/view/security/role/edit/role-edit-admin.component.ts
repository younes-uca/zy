import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {RoleAdminService} from 'src/app/controller/service/admin/security/RoleAdmin.service';
import {RoleDto} from 'src/app/controller/model/security/Role.model';
import {RoleCriteria} from 'src/app/controller/criteria/security/RoleCriteria.model';



@Component({
  selector: 'app-role-edit-admin',
  templateUrl: './role-edit-admin.component.html'
})
export class RoleEditAdminComponent extends AbstractEditController<RoleDto, RoleCriteria, RoleAdminService>   implements OnInit {






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
