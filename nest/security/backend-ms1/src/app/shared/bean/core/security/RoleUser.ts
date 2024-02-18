import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

import {User} from "src/app/shared/bean/core/security/User";
import {Role} from "src/app/shared/bean/core/security/Role";

import {AuditBusinessObject} from "src/app/zynerator/audit/AuditBusinessObject";

@Entity('role_user')
export class RoleUser  extends AuditBusinessObject {

    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => User, { eager: true })
    user: User;
    @ManyToOne(() => Role, { eager: true })
    role: Role;
}
