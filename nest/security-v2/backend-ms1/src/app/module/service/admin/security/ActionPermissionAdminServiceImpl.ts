import {Injectable, NotFoundException} from "@nestjs/common";

import {AbstractServiceImpl} from "src/app/zynerator/service/AbstractServiceImpl";

import {ActionPermissionDao} from "src/app/shared/dao/facade/core/security/ActionPermissionDao";
import {ActionPermissionCriteria} from "src/app/shared/dao/criteria/core/security/ActionPermissionCriteria";
import {ActionPermission} from "src/app/shared/bean/core/security/ActionPermission";
import {ActionPermissionDto} from "src/app/shared/dto/security/ActionPermissionDto";


@Injectable()
export class ActionPermissionAdminServiceImpl extends AbstractServiceImpl<ActionPermission, ActionPermissionCriteria, ActionPermissionDao>{

    constructor(private readonly dao: ActionPermissionDao ,
    ) {
        super(dao);
    }

    async save(item: ActionPermission): Promise<ActionPermission> {
        const saved = await this.dao.save(item);
        return saved;
    }


    async update(item: ActionPermission): Promise<ActionPermission> {
        const saved = await this.dao.saveOrUpdate(item);
        return saved;
    }

    async updateMultiple(items: ActionPermission[]): Promise<void> {
        if (items) {
            items.forEach(e => this.update(e))
        }
    }

    async  findAllOptimized(): Promise<ActionPermissionDto[]> {
        return this.dao.findAllOptimized();
    }

    async findAll(): Promise<ActionPermission[]> {
        return this.dao.findAll();
    }

    async findById(id: number): Promise<ActionPermission> {
        return this.dao.findById(id);
    }


    async deleteById(id: number): Promise<number> {
        const existing = await this.findById(id);
        if (!existing) {
            throw new NotFoundException(`Action permission with ID ${id} not found.`);
        }
        const result = await this.dao.deleteById(existing.id);
        return result;
    }

    async deleteMultiple(items: ActionPermission[]): Promise<ActionPermission[]> {
        const deletedItems: ActionPermission[] = [];
        for (const item of items) {
            await this.deleteById(item.id);
            deletedItems.push(item);
        }
        return deletedItems;
    }


    async findWithAssociatedLists(id: number): Promise<ActionPermission> {
        const result = await this.dao.findById(id);
    return result;
    }

    async updateWithAssociatedLists(item: ActionPermission): Promise<ActionPermission> {
         return await this.dao.saveOrUpdate(item);
    }
}

