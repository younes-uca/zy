import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleUser } from "src/app/shared/bean/core/security/RoleUser";
import { RoleUserDao } from "src/app/shared/dao/facade/core/security/RoleUserDao";
import { RoleUserConverter } from "src/app/shared/converter/security/RoleUserConverter";
import { RoleUserRestAdmin } from "src/app/module/ws/admin/security/RoleUserRestAdmin";
import { RoleUserAdminServiceImpl } from "src/app/module/service/admin/security/RoleUserAdminServiceImpl";
import { Role } from "src/app/shared/bean/core/security/Role";
import { RoleDao } from "src/app/shared/dao/facade/core/security/RoleDao";
import { RoleConverter } from "src/app/shared/converter/security/RoleConverter";
import { RoleRestAdmin } from "src/app/module/ws/admin/security/RoleRestAdmin";
import { RoleAdminServiceImpl } from "src/app/module/service/admin/security/RoleAdminServiceImpl";
import { ModelPermissionUser } from "src/app/shared/bean/core/security/ModelPermissionUser";
import { ModelPermissionUserDao } from "src/app/shared/dao/facade/core/security/ModelPermissionUserDao";
import { ModelPermissionUserConverter } from "src/app/shared/converter/security/ModelPermissionUserConverter";
import { ModelPermissionUserRestAdmin } from "src/app/module/ws/admin/security/ModelPermissionUserRestAdmin";
import { ModelPermissionUserAdminServiceImpl } from "src/app/module/service/admin/security/ModelPermissionUserAdminServiceImpl";
import { ActionPermission } from "src/app/shared/bean/core/security/ActionPermission";
import { ActionPermissionDao } from "src/app/shared/dao/facade/core/security/ActionPermissionDao";
import { ActionPermissionConverter } from "src/app/shared/converter/security/ActionPermissionConverter";
import { ActionPermissionRestAdmin } from "src/app/module/ws/admin/security/ActionPermissionRestAdmin";
import { ActionPermissionAdminServiceImpl } from "src/app/module/service/admin/security/ActionPermissionAdminServiceImpl";
import { ModelPermission } from "src/app/shared/bean/core/security/ModelPermission";
import { ModelPermissionDao } from "src/app/shared/dao/facade/core/security/ModelPermissionDao";
import { ModelPermissionConverter } from "src/app/shared/converter/security/ModelPermissionConverter";
import { ModelPermissionRestAdmin } from "src/app/module/ws/admin/security/ModelPermissionRestAdmin";
import { ModelPermissionAdminServiceImpl } from "src/app/module/service/admin/security/ModelPermissionAdminServiceImpl";
import { User } from "src/app/shared/bean/core/security/User";
import { UserDao } from "src/app/shared/dao/facade/core/security/UserDao";
import { UserConverter } from "src/app/shared/converter/security/UserConverter";
import { UserRestAdmin } from "src/app/module/ws/admin/security/UserRestAdmin";
import { UserAdminServiceImpl } from "src/app/module/service/admin/security/UserAdminServiceImpl";

@Module({
    imports: [TypeOrmModule.forFeature([  RoleUser ,  Role ,  ModelPermissionUser ,  ActionPermission ,  ModelPermission ,  User , ])],
    controllers: [ RoleUserRestAdmin ,  RoleRestAdmin ,  ModelPermissionUserRestAdmin ,  ActionPermissionRestAdmin ,  ModelPermissionRestAdmin ,  UserRestAdmin ,  ],
    providers: [  RoleUserAdminServiceImpl ,   RoleUserDao , RoleUserConverter ,
                  RoleAdminServiceImpl ,   RoleDao , RoleConverter ,
                  ModelPermissionUserAdminServiceImpl ,   ModelPermissionUserDao , ModelPermissionUserConverter ,
                  ActionPermissionAdminServiceImpl ,   ActionPermissionDao , ActionPermissionConverter ,
                  ModelPermissionAdminServiceImpl ,   ModelPermissionDao , ModelPermissionConverter ,
                  UserAdminServiceImpl ,   UserDao , UserConverter ,
                  ],
})
export class AdminModule {}
