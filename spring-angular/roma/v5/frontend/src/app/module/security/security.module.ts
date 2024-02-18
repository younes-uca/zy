import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import {MultiSelectModule} from 'primeng/multiselect';


import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ModelPermissionEditComponent} from './security/model-permission/edit/model-permission-edit.component';
import {UserCreateComponent} from './security/user/create/user-create.component';
import {UserListComponent} from './security/user/list/user-list.component';
import {UserViewComponent} from './security/user/view/user-view.component';
import {UserEditComponent} from './security/user/edit/user-edit.component';
import {ModelPermissionCreateComponent} from './security/model-permission/create/model-permission-create.component';
import {ModelPermissionListComponent} from './security/model-permission/list/model-permission-list.component';
import {ModelPermissionViewComponent} from './security/model-permission/view/model-permission-view.component';
import {RoleEditComponent} from './security/role/edit/role-edit.component';
import {ActionPermissionCreateComponent} from './security/action-permission/create/action-permission-create.component';
import {ActionPermissionListComponent} from './security/action-permission/list/action-permission-list.component';
import {ActionPermissionViewComponent} from './security/action-permission/view/action-permission-view.component';
import {ActionPermissionEditComponent} from './security/action-permission/edit/action-permission-edit.component';
import {ModelPermissionUserCreateComponent} from './security/model-permission-utilisateur/create/model-permission-user-create.component';
import {ModelPermissionUserListComponent} from './security/model-permission-utilisateur/list/model-permission-user-list.component';
import {ModelPermissionUserViewComponent} from './security/model-permission-utilisateur/view/model-permission-user-view.component';
import {ModelPermissionUserEditComponent} from './security/model-permission-utilisateur/edit/model-permission-user-edit.component';
import {RoleCreateComponent} from './security/role/create/role-create.component';
import {RoleListComponent} from './security/role/list/role-list.component';
import {RoleViewComponent} from './security/role/view/role-view.component';
import {PaginatorModule} from 'primeng/paginator';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    declarations: [
        UserCreateComponent,
        UserListComponent,
        UserViewComponent,
        UserEditComponent,
        ModelPermissionCreateComponent,
        ModelPermissionListComponent,
        ModelPermissionViewComponent,
        ModelPermissionEditComponent,
        ActionPermissionCreateComponent,
        ActionPermissionListComponent,
        ActionPermissionViewComponent,
        ActionPermissionEditComponent,
        ModelPermissionUserCreateComponent,
        ModelPermissionUserListComponent,
        ModelPermissionUserViewComponent,
        ModelPermissionUserEditComponent,
        RoleCreateComponent,
        RoleListComponent,
        RoleViewComponent,
        RoleEditComponent,
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

    ],
    exports: [
        UserCreateComponent,
        UserListComponent,
        UserViewComponent,
        UserEditComponent,
        ModelPermissionCreateComponent,
        ModelPermissionListComponent,
        ModelPermissionViewComponent,
        ModelPermissionEditComponent,
        ActionPermissionCreateComponent,
        ActionPermissionListComponent,
        ActionPermissionViewComponent,
        ActionPermissionEditComponent,
        ModelPermissionUserCreateComponent,
        ModelPermissionUserListComponent,
        ModelPermissionUserViewComponent,
        ModelPermissionUserEditComponent,
        RoleCreateComponent,
        RoleListComponent,
        RoleViewComponent,
        RoleEditComponent,
    ],
    entryComponents: [],
})
export class SecurityModule {
}
