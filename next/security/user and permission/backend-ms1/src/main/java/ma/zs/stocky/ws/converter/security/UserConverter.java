package  ma.zs.stocky.ws.converter.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ma.zs.stocky.zynerator.util.ListUtil;

import ma.zs.stocky.ws.converter.security.RoleConverter;
import ma.zs.stocky.ws.converter.security.ModelPermissionUserConverter;
import ma.zs.stocky.ws.converter.security.ModelPermissionConverter;
import ma.zs.stocky.ws.converter.security.RoleUserConverter;
import ma.zs.stocky.ws.converter.security.ActionPermissionConverter;



import ma.zs.stocky.zynerator.util.StringUtil;
import ma.zs.stocky.zynerator.converter.AbstractConverter;
import ma.zs.stocky.zynerator.util.DateUtil;
import ma.zs.stocky.bean.core.security.User;
import ma.zs.stocky.ws.dto.security.UserDto;

@Component
public class UserConverter extends AbstractConverter<User, UserDto> {

    @Autowired
    private RoleConverter roleConverter ;
    @Autowired
    private ModelPermissionUserConverter modelPermissionUserConverter ;
    @Autowired
    private ModelPermissionConverter modelPermissionConverter ;
    @Autowired
    private RoleUserConverter roleUserConverter ;
    @Autowired
    private ActionPermissionConverter actionPermissionConverter ;
    private boolean roleUsers;
    private boolean modelPermissionUsers;

    public  UserConverter() {
        super(User.class, UserDto.class);
        init(true);
    }

    @Override
    public User toItem(UserDto dto) {
        if (dto == null) {
            return null;
        } else {
        User item = new User();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(dto.getCredentialsNonExpired() != null)
                item.setCredentialsNonExpired(dto.getCredentialsNonExpired());
            if(dto.getEnabled() != null)
                item.setEnabled(dto.getEnabled());
            if(StringUtil.isNotEmpty(dto.getEmail()))
                item.setEmail(dto.getEmail());
            if(dto.getAccountNonExpired() != null)
                item.setAccountNonExpired(dto.getAccountNonExpired());
            if(dto.getAccountNonLocked() != null)
                item.setAccountNonLocked(dto.getAccountNonLocked());
            if(StringUtil.isNotEmpty(dto.getUsername()))
                item.setUsername(dto.getUsername());
            if(StringUtil.isNotEmpty(dto.getPassword()))
                item.setPassword(dto.getPassword());
            if(dto.getPasswordChanged() != null)
                item.setPasswordChanged(dto.getPasswordChanged());
            if(StringUtil.isNotEmpty(dto.getLastName()))
                item.setLastName(dto.getLastName());
            if(StringUtil.isNotEmpty(dto.getFirstName()))
                item.setFirstName(dto.getFirstName());
            if(StringUtil.isNotEmpty(dto.getPhone()))
                item.setPhone(dto.getPhone());

            if(this.roleUsers && ListUtil.isNotEmpty(dto.getRoleUsers()))
                item.setRoleUsers(roleUserConverter.toItem(dto.getRoleUsers()));
            if(this.modelPermissionUsers && ListUtil.isNotEmpty(dto.getModelPermissionUsers()))
                item.setModelPermissionUsers(modelPermissionUserConverter.toItem(dto.getModelPermissionUsers()));


        return item;
        }
    }

    @Override
    public UserDto toDto(User item) {
        if (item == null) {
            return null;
        } else {
            UserDto dto = new UserDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCredentialsNonExpired()))
                dto.setCredentialsNonExpired(item.getCredentialsNonExpired());
            if(StringUtil.isNotEmpty(item.getEnabled()))
                dto.setEnabled(item.getEnabled());
            if(StringUtil.isNotEmpty(item.getEmail()))
                dto.setEmail(item.getEmail());
            if(StringUtil.isNotEmpty(item.getAccountNonExpired()))
                dto.setAccountNonExpired(item.getAccountNonExpired());
            if(StringUtil.isNotEmpty(item.getAccountNonLocked()))
                dto.setAccountNonLocked(item.getAccountNonLocked());
            if(StringUtil.isNotEmpty(item.getUsername()))
                dto.setUsername(item.getUsername());
            if(StringUtil.isNotEmpty(item.getPassword()))
                dto.setPassword(item.getPassword());
            if(StringUtil.isNotEmpty(item.getPasswordChanged()))
                dto.setPasswordChanged(item.getPasswordChanged());
            if(StringUtil.isNotEmpty(item.getLastName()))
                dto.setLastName(item.getLastName());
            if(StringUtil.isNotEmpty(item.getFirstName()))
                dto.setFirstName(item.getFirstName());
            if(StringUtil.isNotEmpty(item.getPhone()))
                dto.setPhone(item.getPhone());
        if(this.roleUsers && ListUtil.isNotEmpty(item.getRoleUsers())){
            roleUserConverter.init(true);
            roleUserConverter.setUser(false);
            dto.setRoleUsers(roleUserConverter.toDto(item.getRoleUsers()));
            roleUserConverter.setUser(true);

        }
        if(this.modelPermissionUsers && ListUtil.isNotEmpty(item.getModelPermissionUsers())){
            modelPermissionUserConverter.init(true);
            modelPermissionUserConverter.setUser(false);
            dto.setModelPermissionUsers(modelPermissionUserConverter.toDto(item.getModelPermissionUsers()));
            modelPermissionUserConverter.setUser(true);

        }


        return dto;
        }
    }

    public void copy(UserDto dto, User t) {
    super.copy(dto, t);
    if (dto.getRoleUsers() != null)
        t.setRoleUsers(roleUserConverter.copy(dto.getRoleUsers()));
    if (dto.getModelPermissionUsers() != null)
        t.setModelPermissionUsers(modelPermissionUserConverter.copy(dto.getModelPermissionUsers()));
    }


    public void initList(boolean value) {
        this.roleUsers = value;
        this.modelPermissionUsers = value;
    }

    public void initObject(boolean value) {
    }


    public RoleConverter getRoleConverter(){
        return this.roleConverter;
    }
    public void setRoleConverter(RoleConverter roleConverter ){
        this.roleConverter = roleConverter;
    }
    public ModelPermissionUserConverter getModelPermissionUserConverter(){
        return this.modelPermissionUserConverter;
    }
    public void setModelPermissionUserConverter(ModelPermissionUserConverter modelPermissionUserConverter ){
        this.modelPermissionUserConverter = modelPermissionUserConverter;
    }
    public ModelPermissionConverter getModelPermissionConverter(){
        return this.modelPermissionConverter;
    }
    public void setModelPermissionConverter(ModelPermissionConverter modelPermissionConverter ){
        this.modelPermissionConverter = modelPermissionConverter;
    }
    public RoleUserConverter getRoleUserConverter(){
        return this.roleUserConverter;
    }
    public void setRoleUserConverter(RoleUserConverter roleUserConverter ){
        this.roleUserConverter = roleUserConverter;
    }
    public ActionPermissionConverter getActionPermissionConverter(){
        return this.actionPermissionConverter;
    }
    public void setActionPermissionConverter(ActionPermissionConverter actionPermissionConverter ){
        this.actionPermissionConverter = actionPermissionConverter;
    }
    public boolean  isRoleUsers(){
        return this.roleUsers ;
    }
    public void  setRoleUsers(boolean roleUsers ){
        this.roleUsers  = roleUsers ;
    }
    public boolean  isModelPermissionUsers(){
        return this.modelPermissionUsers ;
    }
    public void  setModelPermissionUsers(boolean modelPermissionUsers ){
        this.modelPermissionUsers  = modelPermissionUsers ;
    }
}
