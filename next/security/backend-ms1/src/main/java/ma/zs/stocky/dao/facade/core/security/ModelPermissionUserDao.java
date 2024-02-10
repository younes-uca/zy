package ma.zs.stocky.dao.facade.core.security;

import ma.zs.stocky.zynerator.repository.AbstractRepository;
import ma.zs.stocky.bean.core.security.ModelPermissionUser;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface ModelPermissionUserDao extends AbstractRepository<ModelPermissionUser,Long>  {

    List<ModelPermissionUser> findByActionPermissionId(Long id);
    int deleteByActionPermissionId(Long id);
    long countByActionPermissionId(Long id);
    List<ModelPermissionUser> findByModelPermissionId(Long id);
    int deleteByModelPermissionId(Long id);
    long countByModelPermissionId(Long id);
    List<ModelPermissionUser> findByUserId(Long id);
    int deleteByUserId(Long id);
    long countByUserId(Long id);


}
