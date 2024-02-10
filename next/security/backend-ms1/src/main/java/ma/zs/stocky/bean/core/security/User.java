package ma.zs.stocky.bean.core.security;

import java.util.Objects;
import java.util.List;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "user")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="user_seq",sequenceName="user_seq",allocationSize=1, initialValue = 1)
public class User   extends AuditBusinessObject     {

    private Long id;

    @Column(columnDefinition = "boolean default false")
    private Boolean credentialsNonExpired = false;
    @Column(columnDefinition = "boolean default false")
    private Boolean enabled = false;
    @Column(length = 500)
    private String email;
    @Column(columnDefinition = "boolean default false")
    private Boolean accountNonExpired = false;
    @Column(columnDefinition = "boolean default false")
    private Boolean accountNonLocked = false;
    @Column(length = 500)
    private String username;
    @Column(length = 500)
    private String password;
    @Column(columnDefinition = "boolean default false")
    private Boolean passwordChanged = false;
    @Column(length = 500)
    private String lastName;
    @Column(length = 500)
    private String firstName;
    @Column(length = 500)
    private String phone;


    private List<RoleUser> roleUsers ;

    public User(){
        super();
    }





    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="user_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public boolean  getCredentialsNonExpired(){
        return this.credentialsNonExpired;
    }
    public void setCredentialsNonExpired(boolean credentialsNonExpired){
        this.credentialsNonExpired = credentialsNonExpired;
    }
    public boolean  getEnabled(){
        return this.enabled;
    }
    public void setEnabled(boolean enabled){
        this.enabled = enabled;
    }
    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public boolean  getAccountNonExpired(){
        return this.accountNonExpired;
    }
    public void setAccountNonExpired(boolean accountNonExpired){
        this.accountNonExpired = accountNonExpired;
    }
    public boolean  getAccountNonLocked(){
        return this.accountNonLocked;
    }
    public void setAccountNonLocked(boolean accountNonLocked){
        this.accountNonLocked = accountNonLocked;
    }
    public String getUsername(){
        return this.username;
    }
    public void setUsername(String username){
        this.username = username;
    }
    public String getPassword(){
        return this.password;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public boolean  getPasswordChanged(){
        return this.passwordChanged;
    }
    public void setPasswordChanged(boolean passwordChanged){
        this.passwordChanged = passwordChanged;
    }
    public String getLastName(){
        return this.lastName;
    }
    public void setLastName(String lastName){
        this.lastName = lastName;
    }
    public String getFirstName(){
        return this.firstName;
    }
    public void setFirstName(String firstName){
        this.firstName = firstName;
    }
    public String getPhone(){
        return this.phone;
    }
    public void setPhone(String phone){
        this.phone = phone;
    }
    @OneToMany(mappedBy = "user")

    public List<RoleUser> getRoleUsers(){
        return this.roleUsers;
    }
    public void setRoleUsers(List<RoleUser> roleUsers){
        this.roleUsers = roleUsers;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id != null && id.equals(user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

