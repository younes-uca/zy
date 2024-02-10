package  ma.zs.stocky.dao.criteria.core.security;



import ma.zs.stocky.zynerator.criteria.BaseCriteria;
import java.util.List;

public class RoleUserCriteria extends  BaseCriteria  {


    private UserCriteria user ;
    private List<UserCriteria> users ;
    private RoleCriteria role ;
    private List<RoleCriteria> roles ;


    public RoleUserCriteria(){}


    public UserCriteria getUser(){
        return this.user;
    }

    public void setUser(UserCriteria user){
        this.user = user;
    }
    public List<UserCriteria> getUsers(){
        return this.users;
    }

    public void setUsers(List<UserCriteria> users){
        this.users = users;
    }
    public RoleCriteria getRole(){
        return this.role;
    }

    public void setRole(RoleCriteria role){
        this.role = role;
    }
    public List<RoleCriteria> getRoles(){
        return this.roles;
    }

    public void setRoles(List<RoleCriteria> roles){
        this.roles = roles;
    }
}
