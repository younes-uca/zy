package  ma.zs.stocky.dao.specification.core.security;

import ma.zs.stocky.dao.criteria.core.security.UserCriteria;
import ma.zs.stocky.bean.core.security.User;
import ma.zs.stocky.zynerator.specification.AbstractSpecification;


public class UserSpecification extends  AbstractSpecification<UserCriteria, User>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateBool("credentialsNonExpired", criteria.getCredentialsNonExpired());
        addPredicateBool("enabled", criteria.getEnabled());
        addPredicate("email", criteria.getEmail(),criteria.getEmailLike());
        addPredicateBool("accountNonExpired", criteria.getAccountNonExpired());
        addPredicateBool("accountNonLocked", criteria.getAccountNonLocked());
        addPredicate("username", criteria.getUsername(),criteria.getUsernameLike());
        addPredicate("password", criteria.getPassword(),criteria.getPasswordLike());
        addPredicateBool("passwordChanged", criteria.getPasswordChanged());
        addPredicate("lastName", criteria.getLastName(),criteria.getLastNameLike());
        addPredicate("firstName", criteria.getFirstName(),criteria.getFirstNameLike());
        addPredicate("phone", criteria.getPhone(),criteria.getPhoneLike());
    }

    public UserSpecification(UserCriteria criteria) {
        super(criteria);
    }

    public UserSpecification(UserCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
