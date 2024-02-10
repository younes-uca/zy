package  ma.zs.stocky.ws.converter.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;




import ma.zs.stocky.zynerator.util.StringUtil;
import ma.zs.stocky.zynerator.converter.AbstractConverter;
import ma.zs.stocky.zynerator.util.DateUtil;
import ma.zs.stocky.bean.core.security.ActionPermission;
import ma.zs.stocky.ws.dto.security.ActionPermissionDto;

@Component
public class ActionPermissionConverter extends AbstractConverter<ActionPermission, ActionPermissionDto> {


    public  ActionPermissionConverter() {
        super(ActionPermission.class, ActionPermissionDto.class);
    }

    @Override
    public ActionPermission toItem(ActionPermissionDto dto) {
        if (dto == null) {
            return null;
        } else {
        ActionPermission item = new ActionPermission();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getReference()))
                item.setReference(dto.getReference());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());



        return item;
        }
    }

    @Override
    public ActionPermissionDto toDto(ActionPermission item) {
        if (item == null) {
            return null;
        } else {
            ActionPermissionDto dto = new ActionPermissionDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getReference()))
                dto.setReference(item.getReference());
            if(StringUtil.isNotEmpty(item.getLibelle()))
                dto.setLibelle(item.getLibelle());


        return dto;
        }
    }




    public void initObject(boolean value) {
    }


}
