package ma.zs.stocky.dao.facade.core.security;

import ma.zs.stocky.zynerator.repository.AbstractRepository;
import ma.zs.stocky.bean.core.security.ModelPermission;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface ModelPermissionDao extends AbstractRepository<ModelPermission,Long>  {



}
