import {Injectable, NotFoundException} from "@nestjs/common";

import {AbstractServiceImpl} from "src/app/zynerator/service/AbstractServiceImpl";

import {ModelPermissionUserDao} from "src/app/shared/dao/facade/core/security/ModelPermissionUserDao";
import {ModelPermissionUserCriteria} from "src/app/shared/dao/criteria/core/security/ModelPermissionUserCriteria";
import {ModelPermissionUser} from "src/app/shared/bean/core/security/ModelPermissionUser";
import {ModelPermissionUserDto} from "src/app/shared/dto/security/ModelPermissionUserDto";


@Injectable()
export class ModelPermissionUserAdminServiceImpl extends AbstractServiceImpl<ModelPermissionUser, ModelPermissionUserCriteria, ModelPermissionUserDao>{

    constructor(private readonly dao: ModelPermissionUserDao ,
    ) {
        super(dao);
    }

    async save(item: ModelPermissionUser): Promise<ModelPermissionUser> {
        const saved = await this.dao.save(item);
        return saved;
    }


    async update(item: ModelPermissionUser): Promise<ModelPermissionUser> {
        const saved = await this.dao.saveOrUpdate(item);
        return saved;
    }

    async updateMultiple(items: ModelPermissionUser[]): Promise<void> {
        if (items) {
            items.forEach(e => this.update(e))
        }
    }

    async  findAllOptimized(): Promise<ModelPermissionUserDto[]> {
        return this.dao.findAllOptimized();
    }

    async findAll(): Promise<ModelPermissionUser[]> {
        return this.dao.findAll();
    }

    async findById(id: number): Promise<ModelPermissionUser> {
        return this.dao.findById(id);
    }


    async deleteById(id: number): Promise<number> {
        const existing = await this.findById(id);
        if (!existing) {
            throw new NotFoundException(`Model permission user with ID ${id} not found.`);
        }
        const result = await this.dao.deleteById(existing.id);
        return result;
    }

    async deleteMultiple(items: ModelPermissionUser[]): Promise<ModelPermissionUser[]> {
        const deletedItems: ModelPermissionUser[] = [];
        for (const item of items) {
            await this.deleteById(item.id);
            deletedItems.push(item);
        }
        return deletedItems;
    }

    async findByActionPermissionId(id: number): Promise<ModelPermissionUser[]> {
        return this.dao.findByActionPermissionId(id);
    }

    async deleteByActionPermissionId(id: number): Promise<number> {
        return this.dao.deleteByActionPermissionId(id);
    }
    async findByModelPermissionId(id: number): Promise<ModelPermissionUser[]> {
        return this.dao.findByModelPermissionId(id);
    }

    async deleteByModelPermissionId(id: number): Promise<number> {
        return this.dao.deleteByModelPermissionId(id);
    }
    async findByUserId(id: number): Promise<ModelPermissionUser[]> {
        return this.dao.findByUserId(id);
    }

    async deleteByUserId(id: number): Promise<number> {
        return this.dao.deleteByUserId(id);
    }

    async findWithAssociatedLists(id: number): Promise<ModelPermissionUser> {
        const result = await this.dao.findById(id);
    return result;
    }

    async updateWithAssociatedLists(item: ModelPermissionUser): Promise<ModelPermissionUser> {
         return await this.dao.saveOrUpdate(item);
    }
}

