import {Component, OnInit} from '@angular/core';
import {ActionPermissionService} from 'src/app/zynerator/security/controller/service/ActionPermission.service';
import {ActionPermissionDto} from 'src/app/zynerator/security/controller/model/ActionPermission.model';
import {ActionPermissionCriteria} from 'src/app/zynerator/security/controller/criteria/ActionPermissionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {environment} from 'src/environments/environment';


@Component({
    selector: 'app-action-permission-list',
    templateUrl: './action-permission-list.component.html'
})
export class ActionPermissionListComponent extends AbstractListController<ActionPermissionDto, ActionPermissionCriteria, ActionPermissionService> implements OnInit {

    fileName = 'ActionPermission';


    constructor(private actionPermissionService: ActionPermissionService) {
        super(actionPermissionService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }


    public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Reference': e.reference,
                'Libelle': e.libelle,
            };
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport,
        }];
    }
}
