import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ModelPermissionUserAdminService} from 'src/app/controller/service/admin/security/ModelPermissionUserAdmin.service';
import {ModelPermissionUserDto} from 'src/app/controller/model/security/ModelPermissionUser.model';
import {ModelPermissionUserCriteria} from 'src/app/controller/criteria/security/ModelPermissionUserCriteria.model';

import {UserDto} from 'src/app/controller/model/security/User.model';
import {UserAdminService} from 'src/app/controller/service/admin/security/UserAdmin.service';
import {ModelPermissionDto} from 'src/app/controller/model/security/ModelPermission.model';
import {ModelPermissionAdminService} from 'src/app/controller/service/admin/security/ModelPermissionAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/security/ActionPermission.model';
import {ActionPermissionAdminService} from 'src/app/controller/service/admin/security/ActionPermissionAdmin.service';
@Component({
  selector: 'app-model-permission-user-view-admin',
  templateUrl: './model-permission-user-view-admin.component.html'
})
export class ModelPermissionUserViewAdminComponent extends AbstractViewController<ModelPermissionUserDto, ModelPermissionUserCriteria, ModelPermissionUserAdminService> implements OnInit {


    constructor(private modelPermissionUserService: ModelPermissionUserAdminService, private userService: UserAdminService, private modelPermissionService: ModelPermissionAdminService, private actionPermissionService: ActionPermissionAdminService){
        super(modelPermissionUserService);
    }

    ngOnInit(): void {
    }


    get modelPermission(): ModelPermissionDto {
       return this.modelPermissionService.item;
    }
    set modelPermission(value: ModelPermissionDto) {
        this.modelPermissionService.item = value;
    }
    get modelPermissions(): Array<ModelPermissionDto> {
       return this.modelPermissionService.items;
    }
    set modelPermissions(value: Array<ModelPermissionDto>) {
        this.modelPermissionService.items = value;
    }
    get actionPermission(): ActionPermissionDto {
       return this.actionPermissionService.item;
    }
    set actionPermission(value: ActionPermissionDto) {
        this.actionPermissionService.item = value;
    }
    get actionPermissions(): Array<ActionPermissionDto> {
       return this.actionPermissionService.items;
    }
    set actionPermissions(value: Array<ActionPermissionDto>) {
        this.actionPermissionService.items = value;
    }
    get user(): UserDto {
       return this.userService.item;
    }
    set user(value: UserDto) {
        this.userService.item = value;
    }
    get users(): Array<UserDto> {
       return this.userService.items;
    }
    set users(value: Array<UserDto>) {
        this.userService.items = value;
    }


}
