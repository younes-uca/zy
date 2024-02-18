import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

import {User} from "src/app/shared/bean/core/security/User";
import {ModelPermission} from "src/app/shared/bean/core/security/ModelPermission";
import {ActionPermission} from "src/app/shared/bean/core/security/ActionPermission";

import {AuditBusinessObject} from "src/app/zynerator/audit/AuditBusinessObject";

@Entity('model_permission_user')
export class ModelPermissionUser  extends AuditBusinessObject {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ default: false })
    value: boolean;
    @Column({ length: 500 })
    subAttribute: string;
    @ManyToOne(() => ActionPermission, { eager: true })
    actionPermission: ActionPermission;
    @ManyToOne(() => ModelPermission, { eager: true })
    modelPermission: ModelPermission;
    @ManyToOne(() => User, { eager: true })
    user: User;
}
