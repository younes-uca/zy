import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

import {Role} from "src/app/shared/bean/core/security/Role";
import {ModelPermissionUser} from "src/app/shared/bean/core/security/ModelPermissionUser";
import {ModelPermission} from "src/app/shared/bean/core/security/ModelPermission";
import {RoleUser} from "src/app/shared/bean/core/security/RoleUser";
import {ActionPermission} from "src/app/shared/bean/core/security/ActionPermission";

import {AuditBusinessObject} from "src/app/zynerator/audit/AuditBusinessObject";

@Entity('user')
export class User  extends AuditBusinessObject {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ default: false })
    credentialsNonExpired: boolean;
    @Column({ default: false })
    enabled: boolean;
    @Column({ length: 500 })
    email: string;
    @Column({ default: false })
    accountNonExpired: boolean;
    @Column({ default: false })
    accountNonLocked: boolean;
    @Column({ length: 500 })
    username: string;
    @Column({ length: 500 })
    password: string;
    @Column({ default: false })
    passwordChanged: boolean;
    @Column({ length: 500 })
    lastName: string;
    @Column({ length: 500 })
    firstName: string;
    @Column({ length: 500 })
    phone: string;
    @OneToMany(() => RoleUser, roleUser => roleUser.user)
    roleUsers: RoleUser[];
    @OneToMany(() => ModelPermissionUser, modelPermissionUser => modelPermissionUser.user)
    modelPermissionUsers: ModelPermissionUser[];
}
