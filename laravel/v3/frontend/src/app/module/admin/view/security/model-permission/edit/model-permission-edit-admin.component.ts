import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ModelPermissionAdminService} from 'src/app/controller/service/admin/security/ModelPermissionAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/security/ModelPermission.model';
import {ModelPermissionCriteria} from 'src/app/controller/criteria/security/ModelPermissionCriteria.model';



@Component({
  selector: 'app-model-permission-edit-admin',
  templateUrl: './model-permission-edit-admin.component.html'
})
export class ModelPermissionEditAdminComponent extends AbstractEditController<ModelPermissionDto, ModelPermissionCriteria, ModelPermissionAdminService>   implements OnInit {






    constructor( private modelPermissionService: ModelPermissionAdminService ) {
        super(modelPermissionService);
    }

    ngOnInit(): void {
    }


    public setValidation(value: boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
