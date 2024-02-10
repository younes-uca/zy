package ma.zs.stocky.service.impl.admin.security;


import ma.zs.stocky.bean.core.security.ModelPermissionUser;
import ma.zs.stocky.dao.criteria.core.security.ModelPermissionUserCriteria;
import ma.zs.stocky.dao.facade.core.security.ModelPermissionUserDao;
import ma.zs.stocky.dao.specification.core.security.ModelPermissionUserSpecification;
import ma.zs.stocky.service.facade.admin.security.ModelPermissionUserAdminService;
import ma.zs.stocky.zynerator.service.AbstractServiceImpl;
import ma.zs.stocky.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;

import ma.zs.stocky.service.facade.admin.security.UserAdminService ;
import ma.zs.stocky.bean.core.security.User ;
import ma.zs.stocky.service.facade.admin.security.ModelPermissionAdminService ;
import ma.zs.stocky.bean.core.security.ModelPermission ;
import ma.zs.stocky.service.facade.admin.security.ActionPermissionAdminService ;
import ma.zs.stocky.bean.core.security.ActionPermission ;

import java.util.List;
@Service
public class ModelPermissionUserAdminServiceImpl extends AbstractServiceImpl<ModelPermissionUser, ModelPermissionUserCriteria, ModelPermissionUserDao> implements ModelPermissionUserAdminService {







    public List<ModelPermissionUser> findByActionPermissionId(Long id){
        return dao.findByActionPermissionId(id);
    }
    public int deleteByActionPermissionId(Long id){
        return dao.deleteByActionPermissionId(id);
    }
    public long countByActionPermissionId(Long id){
        return dao.countByActionPermissionId(id);
    }
    public List<ModelPermissionUser> findByModelPermissionId(Long id){
        return dao.findByModelPermissionId(id);
    }
    public int deleteByModelPermissionId(Long id){
        return dao.deleteByModelPermissionId(id);
    }
    public long countByModelPermissionId(Long id){
        return dao.countByModelPermissionId(id);
    }
    public List<ModelPermissionUser> findByUserId(Long id){
        return dao.findByUserId(id);
    }
    public int deleteByUserId(Long id){
        return dao.deleteByUserId(id);
    }
    public long countByUserId(Long id){
        return dao.countByUserId(id);
    }






    public void configure() {
        super.configure(ModelPermissionUser.class, ModelPermissionUserSpecification.class);
    }


    @Autowired
    private UserAdminService userService ;
    @Autowired
    private ModelPermissionAdminService modelPermissionService ;
    @Autowired
    private ActionPermissionAdminService actionPermissionService ;

    public ModelPermissionUserAdminServiceImpl(ModelPermissionUserDao dao) {
        super(dao);
    }

}
