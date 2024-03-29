import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {RoleService} from 'src/app/zynerator/security/controller/service/Role.service';
import {RoleDto} from 'src/app/zynerator/security/controller/model/Role.model';
import {RoleCriteria} from 'src/app/zynerator/security/controller/criteria/RoleCriteria.model';



@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html'
})
export class RoleEditComponent extends AbstractEditController<RoleDto, RoleCriteria, RoleService>   implements OnInit {


    private _validRoleAuthority = true;




    constructor( private roleservice: RoleService ) {
        super(roleservice);
    }

    ngOnInit(): void {
    }


    public setValidation(value: boolean){
        this.validRoleAuthority = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateRoleAuthority();
    }
    public validateRoleAuthority(){
        if (this.stringUtilService.isEmpty(this.item.authority)) {
            this.errorMessages.push('Authority non valide');
            this.validRoleAuthority = false;
        } else {
            this.validRoleAuthority = true;
        }
    }






    get validRoleAuthority(): boolean {
        return this._validRoleAuthority;
    }
    set validRoleAuthority(value: boolean) {
        this._validRoleAuthority = value;
    }

}
