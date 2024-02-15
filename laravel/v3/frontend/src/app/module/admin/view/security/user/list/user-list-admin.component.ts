import {Component, OnInit} from '@angular/core';
import {UserAdminService} from 'src/app/controller/service/admin/security/UserAdmin.service';
import {UserDto} from 'src/app/controller/model/security/User.model';
import {UserCriteria} from 'src/app/controller/criteria/security/UserCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {RoleDto} from 'src/app/controller/model/security/Role.model';
import {RoleAdminService} from 'src/app/controller/service/admin/security/RoleAdmin.service';
import {ModelPermissionUserDto} from 'src/app/controller/model/security/ModelPermissionUser.model';
import {ModelPermissionUserAdminService} from 'src/app/controller/service/admin/security/ModelPermissionUserAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/security/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/security/ModelPermissionAdmin.service';
import {RoleUserDto} from 'src/app/controller/model/security/RoleUser.model';
import {RoleUserAdminService} from 'src/app/controller/service/admin/security/RoleUserAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/security/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/security/ActionPermissionAdmin.service';


@Component({
  selector: 'app-user-list-admin',
  templateUrl: './user-list-admin.component.html'
})
export class UserListAdminComponent extends AbstractListController<UserDto, UserCriteria, UserAdminService>  implements OnInit {

    fileName = 'User';


     yesOrNoCredentialsNonExpired: any[] = [];
     yesOrNoEnabled: any[] = [];
     yesOrNoAccountNonExpired: any[] = [];
     yesOrNoAccountNonLocked: any[] = [];
     yesOrNoPasswordChanged: any[] = [];


    constructor( private userService: UserAdminService  , private roleService: RoleAdminService, private modelPermissionUserService: ModelPermissionUserAdminService, private modelPermissionService: ModelPermissionAdminService, private roleUserService: RoleUserAdminService, private actionPermissionService: ActionPermissionAdminService) {
        super(userService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('User').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public initCol() {
        this.cols = [
            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
            {field: 'enabled', header: 'Enabled'},
            {field: 'email', header: 'Email'},
            {field: 'accountNonExpired', header: 'Account non expired'},
            {field: 'accountNonLocked', header: 'Account non locked'},
            {field: 'username', header: 'Username'},
            {field: 'password', header: 'Password'},
            {field: 'passwordChanged', header: 'Password changed'},
            {field: 'lastName', header: 'Last name'},
            {field: 'firstName', header: 'First name'},
            {field: 'phone', header: 'Phone'},
        ];
    }



	public initDuplicate(res: UserDto) {
        if (res.roleUsers != null) {
             res.roleUsers.forEach(d => { d.user = null; d.id = null; });
        }
        if (res.modelPermissionUsers != null) {
             res.modelPermissionUsers.forEach(d => { d.user = null; d.id = null; });
        }
	}


   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                 'Email': e.email ,
                'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                 'Username': e.username ,
                 'Password': e.password ,
                'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
                 'Last name': e.lastName ,
                 'First name': e.firstName ,
                 'Phone': e.phone ,
            }
        });

        this.criteriaData = [{
            'Credentials non expired': this.criteria.credentialsNonExpired ? (this.criteria.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.criteria.enabled ? (this.criteria.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Account non expired': this.criteria.accountNonExpired ? (this.criteria.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.criteria.accountNonLocked ? (this.criteria.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Username': this.criteria.username ? this.criteria.username : environment.emptyForExport ,
            'Password': this.criteria.password ? this.criteria.password : environment.emptyForExport ,
            'Password changed': this.criteria.passwordChanged ? (this.criteria.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Last name': this.criteria.lastName ? this.criteria.lastName : environment.emptyForExport ,
            'First name': this.criteria.firstName ? this.criteria.firstName : environment.emptyForExport ,
            'Phone': this.criteria.phone ? this.criteria.phone : environment.emptyForExport ,
        }];
      }
}
