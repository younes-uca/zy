package ma.zs.stocky.bean.core.security;

import java.util.Objects;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "role")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="role_seq",sequenceName="role_seq",allocationSize=1, initialValue = 1)
public class Role   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String authority;



    public Role(){
        super();
    }

    public Role(Long id,String authority){
        this.id = id;
        this.authority = authority ;
    }
    public Role(String authority){
        this.authority = authority ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="role_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getAuthority(){
        return this.authority;
    }
    public void setAuthority(String authority){
        this.authority = authority;
    }

    @Transient
    public String getLabel() {
        label = authority;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Role role = (Role) o;
        return id != null && id.equals(role.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

