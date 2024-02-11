import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from "src/app/shared/bean/core/commun/Client";
import { ClientDao } from "src/app/shared/dao/facade/core/commun/ClientDao";
import { ClientConverter } from "src/app/shared/converter/commun/ClientConverter";
import { ClientAdminRest } from "src/app/module/ws/admin/commun/ClientRestAdmin";

import { ClientAdminServiceImpl } from "src/app/module/service/admin/commun/ClientAdminServiceImpl";
import { Produit } from "src/app/shared/bean/core/commun/Produit";
import { ProduitDao } from "src/app/shared/dao/facade/core/commun/ProduitDao";
import { ProduitConverter } from "src/app/shared/converter/commun/ProduitConverter";
import { ProduitAdminRest } from "src/app/module/ws/admin/commun/ProduitAdminRest";
import { ProduitAdminServiceImpl } from "src/app/module/service/admin/commun/ProduitAdminServiceImpl";
import { Achat } from "src/app/shared/bean/core/stock/Achat";
import { AchatDao } from "src/app/shared/dao/facade/core/stock/AchatDao";
import { AchatConverter } from "src/app/shared/converter/stock/AchatConverter";
import { AchatAdminRest } from "src/app/module/ws/admin/stock/AchatAdminRest";
import { AchatAdminServiceImpl } from "src/app/module/service/admin/stock/AchatAdminServiceImpl";
import { AchatItem } from "src/app/shared/bean/core/stock/AchatItem";
import { AchatItemDao } from "src/app/shared/dao/facade/core/stock/AchatItemDao";
import { AchatItemConverter } from "src/app/shared/converter/stock/AchatItemConverter";
import { AchatItemAdminRest } from "src/app/module/ws/admin/stock/AchatItemAdminRest";
import { AchatItemAdminServiceImpl } from "src/app/module/service/admin/stock/AchatItemAdminServiceImpl";

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
