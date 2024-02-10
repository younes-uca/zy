package  ma.zs.stocky.ws.dto.security;

import ma.zs.stocky.zynerator.audit.Log;
import ma.zs.stocky.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class RoleUserDto  extends AuditBaseDto {


    private UserDto user ;
    private RoleDto role ;



    public RoleUserDto(){
        super();
    }




    public UserDto getUser(){
        return this.user;
    }

    public void setUser(UserDto user){
        this.user = user;
    }
    public RoleDto getRole(){
        return this.role;
    }

    public void setRole(RoleDto role){
        this.role = role;
    }






}
