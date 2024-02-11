import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {Client} from "src/app/shared/bean/core/commun/Client";
import {Achat} from "src/app/shared/bean/core/stock/Achat";
import {AchatItem} from "src/app/shared/bean/core/stock/AchatItem";
import {Produit} from "src/app/shared/bean/core/commun/Produit";
import { User } from "../app/module/auth/bean/User";
import { Role } from "../app/module/auth/bean/Role";

const  databaseProperties : TypeOrmModuleOptions =    {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password:'',
    database: 'koscy',
    synchronize:true,
    entities: [  Client ,  Achat ,  AchatItem ,  Produit ,  User, Role],

};
export  default databaseProperties;
