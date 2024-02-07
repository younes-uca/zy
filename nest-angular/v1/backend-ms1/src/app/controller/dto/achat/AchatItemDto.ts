import {AchatDto} from "src/app/controller/dto/achat/AchatDto";
import {ProduitDto} from "src/app/controller/dto/commun/ProduitDto";

export class AchatItemDto {
    public id: number;
    public prixUnitaire: number;
    public prixVente: number;
    public quantite: number;
    public quantiteAvoir: number;
    public remise: number;

    public produit: ProduitDto;
    public achat: AchatDto;

    constructor(id?: number) {
        this.id = id;
    }



}
