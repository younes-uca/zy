import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';


import {AuditBusinessObject} from "src/app/zynerator/audit/AuditBusinessObject";

@Entity('produit')
export class Produit  extends AuditBusinessObject {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    reference: string;
    @Column({ length: 500 })
    libelle: string;
    @Column({ length: 500 })
    barcode: string;
    @Column({ length: 500 })
    discription: string;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    prixAchatMoyen: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    quantite: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    seuilAlert: number;
}
