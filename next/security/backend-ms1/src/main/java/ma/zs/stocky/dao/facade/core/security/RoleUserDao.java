package ma.zs.stocky.dao.facade.core.security;

import ma.zs.stocky.zynerator.repository.AbstractRepository;
import ma.zs.stocky.bean.core.security.RoleUser;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface RoleUserDao extends AbstractRepository<RoleUser,Long>  {

    List<RoleUser> findByUserId(Long id);
    int deleteByUserId(Long id);
    long countByUserId(Long id);
    List<RoleUser> findByRoleId(Long id);
    int deleteByRoleId(Long id);
    long countByRoleAuthority(String authority);


}
