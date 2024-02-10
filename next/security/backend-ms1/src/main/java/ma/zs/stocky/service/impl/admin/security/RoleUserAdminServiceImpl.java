package ma.zs.stocky.service.impl.admin.security;


import ma.zs.stocky.bean.core.security.RoleUser;
import ma.zs.stocky.dao.criteria.core.security.RoleUserCriteria;
import ma.zs.stocky.dao.facade.core.security.RoleUserDao;
import ma.zs.stocky.dao.specification.core.security.RoleUserSpecification;
import ma.zs.stocky.service.facade.admin.security.RoleUserAdminService;
import ma.zs.stocky.zynerator.service.AbstractServiceImpl;
import ma.zs.stocky.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;

import ma.zs.stocky.service.facade.admin.security.UserAdminService ;
import ma.zs.stocky.bean.core.security.User ;
import ma.zs.stocky.service.facade.admin.security.RoleAdminService ;
import ma.zs.stocky.bean.core.security.Role ;

import java.util.List;
@Service
public class RoleUserAdminServiceImpl extends AbstractServiceImpl<RoleUser, RoleUserCriteria, RoleUserDao> implements RoleUserAdminService {







    public List<RoleUser> findByUserId(Long id){
        return dao.findByUserId(id);
    }
    public int deleteByUserId(Long id){
        return dao.deleteByUserId(id);
    }
    public long countByUserId(Long id){
        return dao.countByUserId(id);
    }
    public List<RoleUser> findByRoleId(Long id){
        return dao.findByRoleId(id);
    }
    public int deleteByRoleId(Long id){
        return dao.deleteByRoleId(id);
    }
    public long countByRoleAuthority(String authority){
        return dao.countByRoleAuthority(authority);
    }






    public void configure() {
        super.configure(RoleUser.class, RoleUserSpecification.class);
    }


    @Autowired
    private UserAdminService userService ;
    @Autowired
    private RoleAdminService roleService ;

    public RoleUserAdminServiceImpl(RoleUserDao dao) {
        super(dao);
    }

}
