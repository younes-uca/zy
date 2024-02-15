import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ActionPermissionAdminService} from 'src/app/controller/service/admin/security/ActionPermissionAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/security/ActionPermission.model';
import {ActionPermissionCriteria} from 'src/app/controller/criteria/security/ActionPermissionCriteria.model';



@Component({
  selector: 'app-action-permission-edit-admin',
  templateUrl: './action-permission-edit-admin.component.html'
})
export class ActionPermissionEditAdminComponent extends AbstractEditController<ActionPermissionDto, ActionPermissionCriteria, ActionPermissionAdminService>   implements OnInit {






    constructor( private actionPermissionService: ActionPermissionAdminService ) {
        super(actionPermissionService);
    }

    ngOnInit(): void {
    }


    public setValidation(value: boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
