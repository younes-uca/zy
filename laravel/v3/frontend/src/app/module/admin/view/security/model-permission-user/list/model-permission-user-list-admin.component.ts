import {Component, OnInit} from '@angular/core';
import {ModelPermissionUserAdminService} from 'src/app/controller/service/admin/security/ModelPermissionUserAdmin.service';
import {ModelPermissionUserDto} from 'src/app/controller/model/security/ModelPermissionUser.model';
import {ModelPermissionUserCriteria} from 'src/app/controller/criteria/security/ModelPermissionUserCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {UserDto} from 'src/app/controller/model/security/User.model';
import {UserAdminService} from 'src/app/controller/service/admin/security/UserAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/security/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/security/ModelPermissionAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/security/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/security/ActionPermissionAdmin.service';


@Component({
  selector: 'app-model-permission-user-list-admin',
  templateUrl: './model-permission-user-list-admin.component.html'
})
export class ModelPermissionUserListAdminComponent extends AbstractListController<ModelPermissionUserDto, ModelPermissionUserCriteria, ModelPermissionUserAdminService>  implements OnInit {

    fileName = 'ModelPermissionUser';


     yesOrNoValue: any[] = [];
    actionPermissions: Array<ActionPermissionDto>;
    modelPermissions: Array<ModelPermissionDto>;
    users: Array<UserDto>;


    constructor( private modelPermissionUserService: ModelPermissionUserAdminService  , private userService: UserAdminService, private modelPermissionService: ModelPermissionAdminService, private actionPermissionService: ActionPermissionAdminService) {
        super(modelPermissionUserService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ModelPermissionUser').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadActionPermission();
                this.loadModelPermission();
                this.loadUser();
                this.yesOrNoValue =  [{label: 'Value', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public initCol() {
        this.cols = [
            {field: 'value', header: 'Value'},
            {field: 'subAttribute', header: 'Sub attribute'},
            {field: 'actionPermission?.id', header: 'Action permission'},
            {field: 'modelPermission?.id', header: 'Model permission'},
            {field: 'user?.id', header: 'User'},
        ];
    }


    public async loadActionPermission(){
       this.actionPermissionService.findAll().subscribe(actionPermissions => this.actionPermissions = actionPermissions, error => console.log(error))
    }
    public async loadModelPermission(){
       this.modelPermissionService.findAll().subscribe(modelPermissions => this.modelPermissions = modelPermissions, error => console.log(error))
    }
    public async loadUser(){
       this.userService.findAll().subscribe(users => this.users = users, error => console.log(error))
    }



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Value': e.value? 'Vrai' : 'Faux' ,
                 'Sub attribute': e.subAttribute ,
                'Action permission': e.actionPermission?.id ,
                'Model permission': e.modelPermission?.id ,
                'User': e.user?.id ,
            }
        });

        this.criteriaData = [{
            'Value': this.criteria.value ? (this.criteria.value ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Sub attribute': this.criteria.subAttribute ? this.criteria.subAttribute : environment.emptyForExport ,
        //'Action permission': this.criteria.actionPermission?.id ? this.criteria.actionPermission?.id : environment.emptyForExport ,
        //'Model permission': this.criteria.modelPermission?.id ? this.criteria.modelPermission?.id : environment.emptyForExport ,
        //'User': this.criteria.user?.id ? this.criteria.user?.id : environment.emptyForExport ,
        }];
      }
}
