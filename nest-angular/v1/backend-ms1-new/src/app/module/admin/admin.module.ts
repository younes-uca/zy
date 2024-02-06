import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from "src/app/controller/bean/core/commun/Client";
import { ClientDao } from "src/app/controller/dao/facade/core/commun/ClientDao";
import { ClientConverter } from "src/app/controller/converter/commun/ClientConverter";
import { ClientAdminRest } from "src/app/module/ws/admin/commun/ClientRestAdmin";
import { ClientAdminServiceImpl } from "src/app/module/service/admin/commun/ClientAdminServiceImpl";
import { Produit } from "src/app/controller/bean/core/commun/Produit";
import { ProduitDao } from "src/app/controller/dao/facade/core/commun/ProduitDao";
import { ProduitConverter } from "src/app/controller/converter/commun/ProduitConverter";
import { ProduitAdminRest } from "src/app/module/ws/admin/commun/ProduitRestAdmin";
import { ProduitAdminServiceImpl } from "src/app/module/service/admin/commun/ProduitAdminServiceImpl";
import { Achat } from "src/app/controller/bean/core/achat/Achat";
import { AchatDao } from "src/app/controller/dao/facade/core/achat/AchatDao";
import { AchatConverter } from "src/app/controller/converter/achat/AchatConverter";
import { AchatAdminRest } from "src/app/module/ws/admin/achat/AchatRestAdmin";
import { AchatAdminServiceImpl } from "src/app/module/service/admin/achat/AchatAdminServiceImpl";
import { AchatItem } from "src/app/controller/bean/core/achat/AchatItem";
import { AchatItemDao } from "src/app/controller/dao/facade/core/achat/AchatItemDao";
import { AchatItemConverter } from "src/app/controller/converter/achat/AchatItemConverter";
import { AchatItemAdminRest } from "src/app/module/ws/admin/achat/AchatItemRestAdmin";
import { AchatItemAdminServiceImpl } from "src/app/module/service/admin/achat/AchatItemAdminServiceImpl";

@Module({
    imports: [TypeOrmModule.forFeature([  Client ,  Produit ,  Achat ,  AchatItem , ])],
    controllers: [ ClientAdminRest ,  ProduitAdminRest ,  AchatAdminRest ,  AchatItemAdminRest ,  ],
    providers: [  ClientAdminServiceImpl ,   ClientDao , ClientConverter ,
                  ProduitAdminServiceImpl ,   ProduitDao , ProduitConverter ,
                  AchatAdminServiceImpl ,   AchatDao , AchatConverter ,
                  AchatItemAdminServiceImpl ,   AchatItemDao , AchatItemConverter ,
                  ],
})
export class AdminModule {}
