import {Component, OnInit} from '@angular/core';
import {RoleService} from 'src/app/zynerator/security/controller/service/Role.service';
import {RoleDto} from 'src/app/zynerator/security/controller/model/Role.model';
import {RoleCriteria} from 'src/app/zynerator/security/controller/criteria/RoleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent extends AbstractListController<RoleDto, RoleCriteria, RoleService>  implements OnInit {

    fileName = 'Role';



    constructor( private roleservice: RoleService  ) {
        super(roleservice);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Role');
        if (this.listActionIsValid) {
            this.findPaginatedByCriteria();
            this.initExport();
            this.initCol();
        }
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