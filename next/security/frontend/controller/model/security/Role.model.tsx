import {BaseDto} from "@/utils/zynerator/dto/BaseDto.model";


export class RoleDto extends BaseDto{

    public authority: string;



    constructor() {
        super();
        this.authority = '';
        }

    getClassName() {
        return "Role";
    }
}
