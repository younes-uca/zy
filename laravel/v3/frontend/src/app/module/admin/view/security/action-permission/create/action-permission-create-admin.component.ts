import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ActionPermissionAdminService} from 'src/app/controller/service/admin/security/ActionPermissionAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/security/ActionPermission.model';
import {ActionPermissionCriteria} from 'src/app/controller/criteria/security/ActionPermissionCriteria.model';
@Component({
  selector: 'app-action-permission-create-admin',
  templateUrl: './action-permission-create-admin.component.html'
})
export class ActionPermissionCreateAdminComponent extends AbstractCreateController<ActionPermissionDto, ActionPermissionCriteria, ActionPermissionAdminService>  implements OnInit {




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
