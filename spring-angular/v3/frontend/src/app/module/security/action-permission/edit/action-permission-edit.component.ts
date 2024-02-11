import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ActionPermissionService} from 'src/app/zynerator/security/controller/service/ActionPermission.service';
import {ActionPermissionDto} from 'src/app/zynerator/security/controller/model/ActionPermission.model';
import {ActionPermissionCriteria} from 'src/app/zynerator/security/controller/criteria/ActionPermissionCriteria.model';



@Component({
  selector: 'app-action-permission-edit',
  templateUrl: './action-permission-edit.component.html'
})
export class ActionPermissionEditComponent extends AbstractEditController<ActionPermissionDto, ActionPermissionCriteria, ActionPermissionService>   implements OnInit {


    private _validActionPermissionReference = true;




    constructor( private actionPermissionService: ActionPermissionService ) {
        super(actionPermissionService);
    }

    ngOnInit(): void {
    }


    public setValidation(value: boolean){
        this.validActionPermissionReference = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateActionPermissionReference();
    }
    public validateActionPermissionReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validActionPermissionReference = false;
        } else {
            this.validActionPermissionReference = true;
        }
    }






    get validActionPermissionReference(): boolean {
        return this._validActionPermissionReference;
    }
    set validActionPermissionReference(value: boolean) {
        this._validActionPermissionReference = value;
    }

}
