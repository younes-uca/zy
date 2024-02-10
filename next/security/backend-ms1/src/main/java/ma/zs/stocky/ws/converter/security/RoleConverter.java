package  ma.zs.stocky.ws.converter.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;




import ma.zs.stocky.zynerator.util.StringUtil;
import ma.zs.stocky.zynerator.converter.AbstractConverter;
import ma.zs.stocky.zynerator.util.DateUtil;
import ma.zs.stocky.bean.core.security.Role;
import ma.zs.stocky.ws.dto.security.RoleDto;

@Component
public class RoleConverter extends AbstractConverter<Role, RoleDto> {


    public  RoleConverter() {
        super(Role.class, RoleDto.class);
    }

    @Override
    public Role toItem(RoleDto dto) {
        if (dto == null) {
            return null;
        } else {
        Role item = new Role();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getAuthority()))
                item.setAuthority(dto.getAuthority());



        return item;
        }
    }

    @Override
    public RoleDto toDto(Role item) {
        if (item == null) {
            return null;
        } else {
            RoleDto dto = new RoleDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getAuthority()))
                dto.setAuthority(item.getAuthority());


        return dto;
        }
    }




    public void initObject(boolean value) {
    }


}
