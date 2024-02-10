package  ma.zs.stocky.dao.specification.core.security;

import ma.zs.stocky.dao.criteria.core.security.RoleUserCriteria;
import ma.zs.stocky.bean.core.security.RoleUser;
import ma.zs.stocky.zynerator.specification.AbstractSpecification;


public class RoleUserSpecification extends  AbstractSpecification<RoleUserCriteria, RoleUser>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateFk("user","id", criteria.getUser()==null?null:criteria.getUser().getId());
        addPredicateFk("user","id", criteria.getUsers());
        addPredicateFk("role","id", criteria.getRole()==null?null:criteria.getRole().getId());
        addPredicateFk("role","id", criteria.getRoles());
        addPredicateFk("role","authority", criteria.getRole()==null?null:criteria.getRole().getAuthority());
    }

    public RoleUserSpecification(RoleUserCriteria criteria) {
        super(criteria);
    }

    public RoleUserSpecification(RoleUserCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
