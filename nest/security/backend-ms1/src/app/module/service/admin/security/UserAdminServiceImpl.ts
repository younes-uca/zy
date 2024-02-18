import {Injectable, NotFoundException} from "@nestjs/common";

import {AbstractServiceImpl} from "src/app/zynerator/service/AbstractServiceImpl";

import {UserDao} from "src/app/shared/dao/facade/core/security/UserDao";
import {UserCriteria} from "src/app/shared/dao/criteria/core/security/UserCriteria";
import {User} from "src/app/shared/bean/core/security/User";
import {UserDto} from "src/app/shared/dto/security/UserDto";

import {ModelPermissionUserAdminServiceImpl} from "src/app/module/service/admin/security/ModelPermissionUserAdminServiceImpl";
import {ModelPermissionUser} from "src/app/shared/bean/core/security/ModelPermissionUser";
import {RoleUserAdminServiceImpl} from "src/app/module/service/admin/security/RoleUserAdminServiceImpl";
import {RoleUser} from "src/app/shared/bean/core/security/RoleUser";

@Injectable()
export class UserAdminServiceImpl extends AbstractServiceImpl<User, UserCriteria, UserDao>{

    constructor(private readonly dao: UserDao ,
                 private readonly roleUserService: RoleUserAdminServiceImpl ,
                 private readonly modelPermissionUserService: ModelPermissionUserAdminServiceImpl ,
    ) {
        super(dao);
    }

    async save(item: User): Promise<User> {
        const saved = await this.dao.save(item);
        if (item.roleUsers) {
            const savedRoleUsers: RoleUser[] = [];
            for (const roleUser of item.roleUsers) {
                roleUser.user = saved;
                const savedRoleUser = await this.roleUserService.save(roleUser);
                savedRoleUsers.push(savedRoleUser);
            }
            saved.roleUsers = savedRoleUsers;
        }
        if (item.modelPermissionUsers) {
            const savedModelPermissionUsers: ModelPermissionUser[] = [];
            for (const modelPermissionUser of item.modelPermissionUsers) {
                modelPermissionUser.user = saved;
                const savedModelPermissionUser = await this.modelPermissionUserService.save(modelPermissionUser);
                savedModelPermissionUsers.push(savedModelPermissionUser);
            }
            saved.modelPermissionUsers = savedModelPermissionUsers;
        }
        return saved;
    }


    async update(item: User): Promise<User> {
        const saved = await this.dao.saveOrUpdate(item);
        return saved;
    }

    async updateMultiple(items: User[]): Promise<void> {
        if (items) {
            items.forEach(e => this.update(e))
        }
    }

    async  findAllOptimized(): Promise<UserDto[]> {
        return this.dao.findAllOptimized();
    }

    async findAll(): Promise<User[]> {
        return this.dao.findAll();
    }

    async findById(id: number): Promise<User> {
        return this.dao.findById(id);
    }


    async deleteById(id: number): Promise<number> {
        const existing = await this.findById(id);
        if (!existing) {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }
       await this.roleUserService.deleteByUserId(id)
       await this.modelPermissionUserService.deleteByUserId(id)
        const result = await this.dao.deleteById(existing.id);
        return result;
    }

    async deleteMultiple(items: User[]): Promise<User[]> {
        const deletedItems: User[] = [];
        for (const item of items) {
            await this.deleteById(item.id);
            deletedItems.push(item);
        }
        return deletedItems;
    }


    async findWithAssociatedLists(id: number): Promise<User> {
        const result = await this.dao.findById(id);
        if (result && result.id) {
          result.roleUsers = await this.roleUserService.findByUserId(result.id);
          result.modelPermissionUsers = await this.modelPermissionUserService.findByUserId(result.id);
        }
    return result;
    }

    async updateWithAssociatedLists(item: User): Promise<User> {
            if (item && item.id) {
                //update  roleUsers
                const oldRoleUsers = await this.roleUserService.findByUserId(item.id);
                const result = this.roleUserService.getToBeSavedAndToBeDeleted(oldRoleUsers, item.roleUsers);
                if (result && result.length === 2) {
                    await this.roleUserService.deleteMultiple(result[1]);
                    (result[0] || []).forEach((e) => e.user = item);
                    await this.roleUserService.updateMultiple(result[0]);
                }

                //update  modelPermissionUsers
                const oldModelPermissionUsers = await this.modelPermissionUserService.findByUserId(item.id);
                const result = this.modelPermissionUserService.getToBeSavedAndToBeDeleted(oldModelPermissionUsers, item.modelPermissionUsers);
                if (result && result.length === 2) {
                    await this.modelPermissionUserService.deleteMultiple(result[1]);
                    (result[0] || []).forEach((e) => e.user = item);
                    await this.modelPermissionUserService.updateMultiple(result[0]);
                }

                return this.update(item);
        }
    }
}

