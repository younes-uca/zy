import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';

import { RoleCreateAdminComponent } from './role/create/role-create-admin.component';
import { RoleEditAdminComponent } from './role/edit/role-edit-admin.component';
import { RoleViewAdminComponent } from './role/view/role-view-admin.component';
import { RoleListAdminComponent } from './role/list/role-list-admin.component';
import { ModelPermissionUserCreateAdminComponent } from './model-permission-user/create/model-permission-user-create-admin.component';
import { ModelPermissionUserEditAdminComponent } from './model-permission-user/edit/model-permission-user-edit-admin.component';
import { ModelPermissionUserViewAdminComponent } from './model-permission-user/view/model-permission-user-view-admin.component';
import { ModelPermissionUserListAdminComponent } from './model-permission-user/list/model-permission-user-list-admin.component';
import { ActionPermissionCreateAdminComponent } from './action-permission/create/action-permission-create-admin.component';
import { ActionPermissionEditAdminComponent } from './action-permission/edit/action-permission-edit-admin.component';
import { ActionPermissionViewAdminComponent } from './action-permission/view/action-permission-view-admin.component';
import { ActionPermissionListAdminComponent } from './action-permission/list/action-permission-list-admin.component';
import { ModelPermissionCreateAdminComponent } from './model-permission/create/model-permission-create-admin.component';
import { ModelPermissionEditAdminComponent } from './model-permission/edit/model-permission-edit-admin.component';
import { ModelPermissionViewAdminComponent } from './model-permission/view/model-permission-view-admin.component';
import { ModelPermissionListAdminComponent } from './model-permission/list/model-permission-list-admin.component';
import { UserCreateAdminComponent } from './user/create/user-create-admin.component';
import { UserEditAdminComponent } from './user/edit/user-edit-admin.component';
import { UserViewAdminComponent } from './user/view/user-view-admin.component';
import { UserListAdminComponent } from './user/list/user-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    RoleCreateAdminComponent,
    RoleListAdminComponent,
    RoleViewAdminComponent,
    RoleEditAdminComponent,
    ModelPermissionUserCreateAdminComponent,
    ModelPermissionUserListAdminComponent,
    ModelPermissionUserViewAdminComponent,
    ModelPermissionUserEditAdminComponent,
    ActionPermissionCreateAdminComponent,
    ActionPermissionListAdminComponent,
    ActionPermissionViewAdminComponent,
    ActionPermissionEditAdminComponent,
    ModelPermissionCreateAdminComponent,
    ModelPermissionListAdminComponent,
    ModelPermissionViewAdminComponent,
    ModelPermissionEditAdminComponent,
    UserCreateAdminComponent,
    UserListAdminComponent,
    UserViewAdminComponent,
    UserEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,

  ],
  exports: [
  RoleCreateAdminComponent,
  RoleListAdminComponent,
  RoleViewAdminComponent,
  RoleEditAdminComponent,
  ModelPermissionUserCreateAdminComponent,
  ModelPermissionUserListAdminComponent,
  ModelPermissionUserViewAdminComponent,
  ModelPermissionUserEditAdminComponent,
  ActionPermissionCreateAdminComponent,
  ActionPermissionListAdminComponent,
  ActionPermissionViewAdminComponent,
  ActionPermissionEditAdminComponent,
  ModelPermissionCreateAdminComponent,
  ModelPermissionListAdminComponent,
  ModelPermissionViewAdminComponent,
  ModelPermissionEditAdminComponent,
  UserCreateAdminComponent,
  UserListAdminComponent,
  UserViewAdminComponent,
  UserEditAdminComponent,
  ],
  entryComponents: [],
})
export class SecurityAdminModule { }
