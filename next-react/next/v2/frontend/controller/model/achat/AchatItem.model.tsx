import {BaseDto} from "@/utils/zynerator/dto/BaseDto.model";

import {AchatDto} from '@/controller/model/achat/Achat.model';
import {ProduitDto} from '@/controller/model/commun/Produit.model';

export class AchatItemDto extends BaseDto{

    public prixUnitaire: null | number;

    public prixVente: null | number;

    public quantite: null | number;

    public quantiteAvoir: null | number;

    public remise: null | number;

    public produit: null | ProduitDto ;
    public achat: null | AchatDto ;


    constructor() {
        super();
        this.prixUnitaire = null;
        this.prixVente = null;
        this.quantite = null;
        this.quantiteAvoir = null;
        this.remise = null;
        this.produit = null;
        this.achat = null;
        }

    getClassName() {
        return "Achat item";
    }
}
