package  ma.zs.stocky.ws.converter.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.zs.stocky.ws.converter.security.UserConverter;
import ma.zs.stocky.ws.converter.security.RoleConverter;

import ma.zs.stocky.bean.core.security.User;


import ma.zs.stocky.zynerator.util.StringUtil;
import ma.zs.stocky.zynerator.converter.AbstractConverter;
import ma.zs.stocky.zynerator.util.DateUtil;
import ma.zs.stocky.bean.core.security.RoleUser;
import ma.zs.stocky.ws.dto.security.RoleUserDto;

@Component
public class RoleUserConverter extends AbstractConverter<RoleUser, RoleUserDto> {

    @Autowired
    private UserConverter userConverter ;
    @Autowired
    private RoleConverter roleConverter ;
    private boolean user;
    private boolean role;

    public  RoleUserConverter() {
        super(RoleUser.class, RoleUserDto.class);
    }

    @Override
    public RoleUser toItem(RoleUserDto dto) {
        if (dto == null) {
            return null;
        } else {
        RoleUser item = new RoleUser();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(dto.getUser() != null && dto.getUser().getId() != null){
                item.setUser(new User());
                item.getUser().setId(dto.getUser().getId());
                item.getUser().setId(dto.getUser().getId());
            }

            if(this.role && dto.getRole()!=null &&  dto.getRole().getId() != null)
                item.setRole(roleConverter.toItem(dto.getRole())) ;




        return item;
        }
    }

    @Override
    public RoleUserDto toDto(RoleUser item) {
        if (item == null) {
            return null;
        } else {
            RoleUserDto dto = new RoleUserDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(this.user && item.getUser()!=null) {
                dto.setUser(userConverter.toDto(item.getUser())) ;
            }
            if(this.role && item.getRole()!=null) {
                dto.setRole(roleConverter.toDto(item.getRole())) ;
            }


        return dto;
        }
    }




    public void initObject(boolean value) {
        this.user = value;
        this.role = value;
    }


    public UserConverter getUserConverter(){
        return this.userConverter;
    }
    public void setUserConverter(UserConverter userConverter ){
        this.userConverter = userConverter;
    }
    public RoleConverter getRoleConverter(){
        return this.roleConverter;
    }
    public void setRoleConverter(RoleConverter roleConverter ){
        this.roleConverter = roleConverter;
    }
    public boolean  isUser(){
        return this.user;
    }
    public void  setUser(boolean user){
        this.user = user;
    }
    public boolean  isRole(){
        return this.role;
    }
    public void  setRole(boolean role){
        this.role = role;
    }
}
