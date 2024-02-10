package ma.zs.stocky.bean.core.security;

import java.util.Objects;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "role_user")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="role_user_seq",sequenceName="role_user_seq",allocationSize=1, initialValue = 1)
public class RoleUser   extends AuditBusinessObject     {

    private Long id;


    private User user ;
    private Role role ;


    public RoleUser(){
        super();
    }





    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="role_user_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public User getUser(){
        return this.user;
    }
    public void setUser(User user){
        this.user = user;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Role getRole(){
        return this.role;
    }
    public void setRole(Role role){
        this.role = role;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RoleUser roleUser = (RoleUser) o;
        return id != null && id.equals(roleUser.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

