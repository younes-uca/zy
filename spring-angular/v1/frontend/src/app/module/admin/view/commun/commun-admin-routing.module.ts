
// const root = environment.rootAppUrl;


import { ActionPermissionListComponent } from './security/action-permission/list/action-permission-list.component';
import {ModelPermissionUserListComponent} from './security/model-permission-utilisateur/list/model-permission-user-list.component';
import {ModelPermissionListComponent} from './security/model-permission/list/model-permission-list.component';
import {RoleListComponent} from './security/role/list/role-list.component';
import {UserListComponent} from './security/user/list/user-list.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ClientListAdminComponent } from './client/list/client-list-admin.component';
import { ProduitListAdminComponent } from './produit/list/produit-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'produit',
                            children: [
                                {
                                    path: 'list',
                                    component: ProduitListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class CommunAdminRoutingModule { }
