import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ActionPermissionAdminService} from 'src/app/controller/service/admin/security/ActionPermissionAdmin.service';
import {ActionPermissionDto} from 'src/app/controller/model/security/ActionPermission.model';
import {ActionPermissionCriteria} from 'src/app/controller/criteria/security/ActionPermissionCriteria.model';

@Component({
  selector: 'app-action-permission-view-admin',
  templateUrl: './action-permission-view-admin.component.html'
})
export class ActionPermissionViewAdminComponent extends AbstractViewController<ActionPermissionDto, ActionPermissionCriteria, ActionPermissionAdminService> implements OnInit {


    constructor(private actionPermissionService: ActionPermissionAdminService){
        super(actionPermissionService);
    }

    ngOnInit(): void {
    }




}
