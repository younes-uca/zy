import {AchatItemDto} from "src/app/controller/dto/achat/AchatItemDto";
import {ClientDto} from "src/app/controller/dto/commun/ClientDto";
import {ProduitDto} from "src/app/controller/dto/commun/ProduitDto";

export class AchatDto {
    public id: number;
    public reference: string;
    public dateAchat: Date;
    public total: number;
    public totalPaye: number;
    public description: string;

    public client: ClientDto;
    public achatItems: AchatItemDto[];

    constructor(id?: number, reference?: string) {
        this.id = id;
        this.reference = reference;
    }



}
