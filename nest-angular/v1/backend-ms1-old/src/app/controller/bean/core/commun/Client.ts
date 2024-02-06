import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';


import {AuditBusinessObject} from "src/app/zynerator/audit/AuditBusinessObject";

@Entity('client')
export class Client  extends AuditBusinessObject {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    cin: string;
    @Column({ length: 500 })
    nom: string;
    @Column({ length: 500 })
    tel: string;
    @Column({ length: 500 })
    email: string;
    @Column({ length: 500 })
    adresse: string;
    @Column({ length: 500 })
    description: string;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    creance: number;
}
