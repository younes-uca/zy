package ma.zs.stocky.bean.core.security;

import java.util.Objects;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "model_permission_user")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="model_permission_user_seq",sequenceName="model_permission_user_seq",allocationSize=1, initialValue = 1)
public class ModelPermissionUser   extends AuditBusinessObject     {

    private Long id;

    @Column(columnDefinition = "boolean default false")
    private Boolean value = false;
    @Column(length = 500)
    private String subAttribute;

    private ActionPermission actionPermission ;
    private ModelPermission modelPermission ;
    private User user ;


    public ModelPermissionUser(){
        super();
    }





    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="model_permission_user_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public Boolean  getValue(){
        return this.value;
    }
    public void setValue(Boolean value){
        this.value = value;
    }
    public String getSubAttribute(){
        return this.subAttribute;
    }
    public void setSubAttribute(String subAttribute){
        this.subAttribute = subAttribute;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public ActionPermission getActionPermission(){
        return this.actionPermission;
    }
    public void setActionPermission(ActionPermission actionPermission){
        this.actionPermission = actionPermission;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public ModelPermission getModelPermission(){
        return this.modelPermission;
    }
    public void setModelPermission(ModelPermission modelPermission){
        this.modelPermission = modelPermission;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public User getUser(){
        return this.user;
    }
    public void setUser(User user){
        this.user = user;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ModelPermissionUser modelPermissionUser = (ModelPermissionUser) o;
        return id != null && id.equals(modelPermissionUser.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

