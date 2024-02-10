package ma.zs.stocky.dao.facade.core.security;

import ma.zs.stocky.zynerator.repository.AbstractRepository;
import ma.zs.stocky.bean.core.security.User;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface UserDao extends AbstractRepository<User,Long>  {



}
