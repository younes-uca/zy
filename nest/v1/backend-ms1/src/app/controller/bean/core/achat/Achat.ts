import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

import {AchatItem} from "src/app/controller/bean/core/achat/AchatItem";
import {Client} from "src/app/controller/bean/core/commun/Client";
import {Produit} from "src/app/controller/bean/core/commun/Produit";

import {AuditBusinessObject} from "src/app/zynerator/audit/AuditBusinessObject";

@Entity('achat')
export class Achat  extends AuditBusinessObject {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    reference: string;
    @Column()
    dateAchat: Date;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    total: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    totalPaye: number;
    @Column({ length: 500 })
    description: string;
    @ManyToOne(() => Client, { eager: true })
    client: Client;
    @OneToMany(() => AchatItem, achatItem => achatItem.achat)
    achatItems: AchatItem[];
}
