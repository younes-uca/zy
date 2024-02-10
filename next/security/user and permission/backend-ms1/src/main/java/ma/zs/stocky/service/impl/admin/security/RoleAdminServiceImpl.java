package ma.zs.stocky.service.impl.admin.security;


import ma.zs.stocky.bean.core.security.Role;
import ma.zs.stocky.dao.criteria.core.security.RoleCriteria;
import ma.zs.stocky.dao.facade.core.security.RoleDao;
import ma.zs.stocky.dao.specification.core.security.RoleSpecification;
import ma.zs.stocky.service.facade.admin.security.RoleAdminService;
import ma.zs.stocky.zynerator.service.AbstractServiceImpl;
import ma.zs.stocky.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class RoleAdminServiceImpl extends AbstractServiceImpl<Role, RoleCriteria, RoleDao> implements RoleAdminService {






    public Role findByReferenceEntity(Role t){
        return  dao.findByAuthority(t.getAuthority());
    }


    public List<Role> findAllOptimized() {
        return dao.findAllOptimized();
    }





    public void configure() {
        super.configure(Role.class, RoleSpecification.class);
    }



    public RoleAdminServiceImpl(RoleDao dao) {
        super(dao);
    }

}
