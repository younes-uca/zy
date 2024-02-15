import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {UserAdminService} from 'src/app/controller/service/admin/security/UserAdmin.service';
import {UserDto} from 'src/app/controller/model/security/User.model';
import {UserCriteria} from 'src/app/controller/criteria/security/UserCriteria.model';

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
  selector: 'app-user-view-admin',
  templateUrl: './user-view-admin.component.html'
})
export class UserViewAdminComponent extends AbstractViewController<UserDto, UserCriteria, UserAdminService> implements OnInit {

    roleUsers = new RoleUserDto();
    roleUserss: Array<RoleUserDto> = [];
    modelPermissionUsers = new ModelPermissionUserDto();
    modelPermissionUserss: Array<ModelPermissionUserDto> = [];

    constructor(private userService: UserAdminService, private roleService: RoleAdminService, private modelPermissionUserService: ModelPermissionUserAdminService, private modelPermissionService: ModelPermissionAdminService, private roleUserService: RoleUserAdminService, private actionPermissionService: ActionPermissionAdminService){
        super(userService);
    }

    ngOnInit(): void {
    }


    get role(): RoleDto {
       return this.roleService.item;
    }
    set role(value: RoleDto) {
        this.roleService.item = value;
    }
    get roles(): Array<RoleDto> {
       return this.roleService.items;
    }
    set roles(value: Array<RoleDto>) {
        this.roleService.items = value;
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


}
