import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {RoleUser} from "src/app/shared/bean/core/security/RoleUser";
import {Role} from "src/app/shared/bean/core/security/Role";
import {ModelPermissionUser} from "src/app/shared/bean/core/security/ModelPermissionUser";
import {ActionPermission} from "src/app/shared/bean/core/security/ActionPermission";
import {ModelPermission} from "src/app/shared/bean/core/security/ModelPermission";
import {User} from "src/app/shared/bean/core/security/User";
import { User } from "../app/module/auth/bean/User";
import { Role } from "../app/module/auth/bean/Role";

const  databaseProperties : TypeOrmModuleOptions =    {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password:'',
    database: 'nest-purchase-v3',
    synchronize:true,
    entities: [  RoleUser ,  Role ,  ModelPermissionUser ,  ActionPermission ,  ModelPermission ,  User ,  User, Role],

};
export  default databaseProperties;
