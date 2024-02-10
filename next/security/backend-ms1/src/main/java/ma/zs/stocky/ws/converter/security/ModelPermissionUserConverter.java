package  ma.zs.stocky.ws.converter.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zs.stocky.ws.converter.security.UserConverter;
import ma.zs.stocky.ws.converter.security.ModelPermissionConverter;
import ma.zs.stocky.ws.converter.security.ActionPermissionConverter;

import ma.zs.stocky.bean.core.security.User;


import ma.zs.stocky.zynerator.util.StringUtil;
import ma.zs.stocky.zynerator.converter.AbstractConverter;
import ma.zs.stocky.zynerator.util.DateUtil;
import ma.zs.stocky.bean.core.security.ModelPermissionUser;
import ma.zs.stocky.ws.dto.security.ModelPermissionUserDto;

@Component
public class ModelPermissionUserConverter extends AbstractConverter<ModelPermissionUser, ModelPermissionUserDto> {

    @Autowired
    private UserConverter userConverter ;
    @Autowired
    private ModelPermissionConverter modelPermissionConverter ;
    @Autowired
    private ActionPermissionConverter actionPermissionConverter ;
    private boolean actionPermission;
    private boolean modelPermission;
    private boolean user;

    public  ModelPermissionUserConverter() {
        super(ModelPermissionUser.class, ModelPermissionUserDto.class);
    }

    @Override
    public ModelPermissionUser toItem(ModelPermissionUserDto dto) {
        if (dto == null) {
            return null;
        } else {
        ModelPermissionUser item = new ModelPermissionUser();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(dto.getValue() != null)
                item.setValue(dto.getValue());
            if(StringUtil.isNotEmpty(dto.getSubAttribute()))
                item.setSubAttribute(dto.getSubAttribute());
            if(this.actionPermission && dto.getActionPermission()!=null &&  dto.getActionPermission().getId() != null)
                item.setActionPermission(actionPermissionConverter.toItem(dto.getActionPermission())) ;

            if(this.modelPermission && dto.getModelPermission()!=null &&  dto.getModelPermission().getId() != null)
                item.setModelPermission(modelPermissionConverter.toItem(dto.getModelPermission())) ;

            if(dto.getUser() != null && dto.getUser().getId() != null){
                item.setUser(new User());
                item.getUser().setId(dto.getUser().getId());
                item.getUser().setId(dto.getUser().getId());
            }




        return item;
        }
    }

    @Override
    public ModelPermissionUserDto toDto(ModelPermissionUser item) {
        if (item == null) {
            return null;
        } else {
            ModelPermissionUserDto dto = new ModelPermissionUserDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
                dto.setValue(item.getValue());
            if(StringUtil.isNotEmpty(item.getSubAttribute()))
                dto.setSubAttribute(item.getSubAttribute());
            if(this.actionPermission && item.getActionPermission()!=null) {
                dto.setActionPermission(actionPermissionConverter.toDto(item.getActionPermission())) ;
            }
            if(this.modelPermission && item.getModelPermission()!=null) {
                dto.setModelPermission(modelPermissionConverter.toDto(item.getModelPermission())) ;
            }
            if(this.user && item.getUser()!=null) {
                dto.setUser(userConverter.toDto(item.getUser())) ;
            }


        return dto;
        }
    }




    public void initObject(boolean value) {
        this.actionPermission = value;
        this.modelPermission = value;
        this.user = value;
    }


    public UserConverter getUserConverter(){
        return this.userConverter;
    }
    public void setUserConverter(UserConverter userConverter ){
        this.userConverter = userConverter;
    }
    public ModelPermissionConverter getModelPermissionConverter(){
        return this.modelPermissionConverter;
    }
    public void setModelPermissionConverter(ModelPermissionConverter modelPermissionConverter ){
        this.modelPermissionConverter = modelPermissionConverter;
    }
    public ActionPermissionConverter getActionPermissionConverter(){
        return this.actionPermissionConverter;
    }
    public void setActionPermissionConverter(ActionPermissionConverter actionPermissionConverter ){
        this.actionPermissionConverter = actionPermissionConverter;
    }
    public boolean  isActionPermission(){
        return this.actionPermission;
    }
    public void  setActionPermission(boolean actionPermission){
        this.actionPermission = actionPermission;
    }
    public boolean  isModelPermission(){
        return this.modelPermission;
    }
    public void  setModelPermission(boolean modelPermission){
        this.modelPermission = modelPermission;
    }
    public boolean  isUser(){
        return this.user;
    }
    public void  setUser(boolean user){
        this.user = user;
    }
}
