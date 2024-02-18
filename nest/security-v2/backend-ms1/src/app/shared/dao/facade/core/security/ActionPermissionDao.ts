import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, SelectQueryBuilder} from 'typeorm';
import {AbstractRepository} from "src/app/zynerator/repository/AbstractRepository";

import {ActionPermission} from "src/app/shared/bean/core/security/ActionPermission";
import {ActionPermissionDto} from "src/app/shared/dto/security/ActionPermissionDto";
import {ActionPermissionCriteria} from "src/app/shared/dao/criteria/core/security/ActionPermissionCriteria";

@Injectable()
export class ActionPermissionDao extends AbstractRepository<ActionPermission, ActionPermissionCriteria> {

    constructor(@InjectRepository(ActionPermission) private readonly repository: Repository<ActionPermission>,) {
        super(repository);
    }

    async save(item: ActionPermission): Promise<ActionPermission> {
        const savedItem = await this.repository.save(item);
        return savedItem;
    }


    async saveOrUpdate(item: ActionPermission): Promise<ActionPermission> {
        if (item.id) {
            const entity = await this.findById(item.id);
            if (!entity) {
                throw new Error('Entity not found');
            }
            Object.assign(entity, item);
            return this.repository.save(entity);
        } else {
            return this.repository.save(item);
        }
    }

    async  findAllOptimized(): Promise<ActionPermissionDto[]> {
        return this.repository
                    .createQueryBuilder('item')
                    .select(['item.id AS id'])
                    .getRawMany()
                    .then((result) => result.map((row) => new ActionPermissionDto(row.id)));


    }

    async  findAll(): Promise<ActionPermission[]> {
        return this.repository.find();
    }

    async findById(id: number): Promise<ActionPermission> {
        return this.repository.findOne({where: {id}});
    }


    async deleteById(id: number): Promise<number> {
        const result = await this.repository.delete({id});
        return result.affected;
    }



    public constructQuery(criteria: ActionPermissionCriteria): SelectQueryBuilder<ActionPermission> {
        const query = this.initQuery(this.repository);

        this.addConstraint(query, criteria.reference, 'reference = :reference', {reference: criteria.reference});
        this.addConstraint(query, criteria.libelle, 'libelle = :libelle', {libelle: criteria.libelle});
        return query;
    }

}
