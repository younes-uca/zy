package ma.zs.stocky.bean.core.security;

import java.util.Objects;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "model_permission")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="model_permission_seq",sequenceName="model_permission_seq",allocationSize=1, initialValue = 1)
public class ModelPermission   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String reference;
    @Column(length = 500)
    private String libelle;



    public ModelPermission(){
        super();
    }





    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="model_permission_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ModelPermission modelPermission = (ModelPermission) o;
        return id != null && id.equals(modelPermission.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}
