import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ModelPermissionAdminService} from 'src/app/controller/service/admin/security/ModelPermissionAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/security/ModelPermission.model';
import {ModelPermissionCriteria} from 'src/app/controller/criteria/security/ModelPermissionCriteria.model';
@Component({
  selector: 'app-model-permission-create-admin',
  templateUrl: './model-permission-create-admin.component.html'
})
export class ModelPermissionCreateAdminComponent extends AbstractCreateController<ModelPermissionDto, ModelPermissionCriteria, ModelPermissionAdminService>  implements OnInit {




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
