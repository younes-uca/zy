import {forwardRef, Inject, Injectable} from "@nestjs/common";
import {AbstractConverter} from "src/app/zynerator/converter/AbstractConverter";

import {RoleUser} from "src/app/shared/bean/core/security/RoleUser";
import {RoleUserDto} from "src/app/shared/dto/security/RoleUserDto";

import {UserConverter} from "src/app/shared/converter/security/UserConverter";
import {RoleConverter} from "src/app/shared/converter/security/RoleConverter";
import {User} from "src/app/shared/bean/core/security/User";

@Injectable()
export class RoleUserConverter extends AbstractConverter<RoleUser, RoleUserDto> {

    user: boolean;
    role: boolean;

    constructor(
        @Inject(forwardRef(() => UserConverter)) readonly userConverter: UserConverter,
        @Inject(forwardRef(() => RoleConverter)) readonly roleConverter: RoleConverter,
        ) {
            super();
            this.init(true);
    }

    toItem(dto: RoleUserDto): RoleUser {
        if (!dto) {
            return null;
        }
        const item =new RoleUser();
        if (dto.id) {
            item.id = dto.id;
        }


		if(dto.user && dto.user.id){
			item.user = new User();
			item.user.id = dto.user.id;
			item.user.id =  dto.user.id;
		}

		if(this.role && dto.role &&  dto.role.id)
			item.role = this.roleConverter.toItem(dto.role) ;



        return item;
    }

    toDto(item: RoleUser): RoleUserDto {
        if (!item) {
            return null;
        }
        const dto = new RoleUserDto();

        if (item.id) {
            dto.id = item.id;
        }
        if(this.user && item.user)
            dto.user = this.userConverter.toDto(item.user) ;
        if(this.role && item.role)
            dto.role = this.roleConverter.toDto(item.role) ;


        return dto;
    }



    public initObject(value: boolean): void {
        this.user = value;
        this.role = value;
    }
}
