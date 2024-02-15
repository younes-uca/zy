import {Component, OnInit} from '@angular/core';
import {RoleAdminService} from 'src/app/controller/service/admin/security/RoleAdmin.service';
import {RoleDto} from 'src/app/controller/model/security/Role.model';
import {RoleCriteria} from 'src/app/controller/criteria/security/RoleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-role-list-admin',
  templateUrl: './role-list-admin.component.html'
})
export class RoleListAdminComponent extends AbstractListController<RoleDto, RoleCriteria, RoleAdminService>  implements OnInit {

    fileName = 'Role';




    constructor( private roleService: RoleAdminService  ) {
        super(roleService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Role').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public initCol() {
        this.cols = [
            {field: 'authority', header: 'Authority'},
        ];
    }





   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Authority': e.authority ,
            }
        });

        this.criteriaData = [{
            'Authority': this.criteria.authority ? this.criteria.authority : environment.emptyForExport ,
        }];
      }
}
