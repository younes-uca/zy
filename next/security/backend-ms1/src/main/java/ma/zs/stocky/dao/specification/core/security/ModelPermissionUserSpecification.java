package  ma.zs.stocky.dao.specification.core.security;

import ma.zs.stocky.dao.criteria.core.security.ModelPermissionUserCriteria;
import ma.zs.stocky.bean.core.security.ModelPermissionUser;
import ma.zs.stocky.zynerator.specification.AbstractSpecification;


public class ModelPermissionUserSpecification extends  AbstractSpecification<ModelPermissionUserCriteria, ModelPermissionUser>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateBool("value", criteria.getValue());
        addPredicate("subAttribute", criteria.getSubAttribute(),criteria.getSubAttributeLike());
        addPredicateFk("actionPermission","id", criteria.getActionPermission()==null?null:criteria.getActionPermission().getId());
        addPredicateFk("actionPermission","id", criteria.getActionPermissions());
        addPredicateFk("modelPermission","id", criteria.getModelPermission()==null?null:criteria.getModelPermission().getId());
        addPredicateFk("modelPermission","id", criteria.getModelPermissions());
        addPredicateFk("user","id", criteria.getUser()==null?null:criteria.getUser().getId());
        addPredicateFk("user","id", criteria.getUsers());
    }

    public ModelPermissionUserSpecification(ModelPermissionUserCriteria criteria) {
        super(criteria);
    }

    public ModelPermissionUserSpecification(ModelPermissionUserCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
