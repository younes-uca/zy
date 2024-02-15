import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {UserDto} from './User.model';
import {RoleDto} from './Role.model';

export class RoleUserDto extends BaseDto{

    public user: UserDto ;
    public role: RoleDto ;
    

    constructor() {
        super();


        }

}
