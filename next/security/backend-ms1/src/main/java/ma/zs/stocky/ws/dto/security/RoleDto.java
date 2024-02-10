package  ma.zs.stocky.ws.dto.security;

import ma.zs.stocky.zynerator.audit.Log;
import ma.zs.stocky.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class RoleDto  extends AuditBaseDto {

    private String authority  ;




    public RoleDto(){
        super();
    }



    @Log
    public String getAuthority(){
        return this.authority;
    }
    public void setAuthority(String authority){
        this.authority = authority;
    }








}
