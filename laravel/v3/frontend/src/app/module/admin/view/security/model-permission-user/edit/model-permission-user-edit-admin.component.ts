import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

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
  selector: 'app-model-permission-user-edit-admin',
  templateUrl: './model-permission-user-edit-admin.component.html'
})
export class ModelPermissionUserEditAdminComponent extends AbstractEditController<ModelPermissionUserDto, ModelPermissionUserCriteria, ModelPermissionUserAdminService>   implements OnInit {






    constructor( private modelPermissionUserService: ModelPermissionUserAdminService , private userService: UserAdminService, private modelPermissionService: ModelPermissionAdminService, private actionPermissionService: ActionPermissionAdminService) {
        super(modelPermissionUserService);
    }

    ngOnInit(): void {
        this.actionPermission = new ActionPermissionDto();
        this.actionPermissionService.findAll().subscribe((data) => this.actionPermissions = data);
        this.modelPermission = new ModelPermissionDto();
        this.modelPermissionService.findAll().subscribe((data) => this.modelPermissions = data);
        this.user = new UserDto();
        this.userService.findAll().subscribe((data) => this.users = data);
    }


    public setValidation(value: boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateModelPermission(modelPermission: string) {
        const isPermistted = await this.roleService.isPermitted('ModelPermission', 'edit');
        if (isPermistted) {
             this.modelPermission = new ModelPermissionDto();
             this.createModelPermissionDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateActionPermission(actionPermission: string) {
        const isPermistted = await this.roleService.isPermitted('ActionPermission', 'edit');
        if (isPermistted) {
             this.actionPermission = new ActionPermissionDto();
             this.createActionPermissionDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateUser(user: string) {
        const isPermistted = await this.roleService.isPermitted('User', 'edit');
        if (isPermistted) {
             this.user = new UserDto();
             this.createUserDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
   get createModelPermissionDialog(): boolean {
       return this.modelPermissionService.createDialog;
   }
  set createModelPermissionDialog(value: boolean) {
       this.modelPermissionService.createDialog= value;
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
   get createActionPermissionDialog(): boolean {
       return this.actionPermissionService.createDialog;
   }
  set createActionPermissionDialog(value: boolean) {
       this.actionPermissionService.createDialog= value;
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
   get createUserDialog(): boolean {
       return this.userService.createDialog;
   }
  set createUserDialog(value: boolean) {
       this.userService.createDialog= value;
   }



}
