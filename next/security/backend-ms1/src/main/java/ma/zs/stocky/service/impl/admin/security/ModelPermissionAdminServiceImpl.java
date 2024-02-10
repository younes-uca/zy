package ma.zs.stocky.service.impl.admin.security;


import ma.zs.stocky.bean.core.security.ModelPermission;
import ma.zs.stocky.dao.criteria.core.security.ModelPermissionCriteria;
import ma.zs.stocky.dao.facade.core.security.ModelPermissionDao;
import ma.zs.stocky.dao.specification.core.security.ModelPermissionSpecification;
import ma.zs.stocky.service.facade.admin.security.ModelPermissionAdminService;
import ma.zs.stocky.zynerator.service.AbstractServiceImpl;
import ma.zs.stocky.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class ModelPermissionAdminServiceImpl extends AbstractServiceImpl<ModelPermission, ModelPermissionCriteria, ModelPermissionDao> implements ModelPermissionAdminService {













    public void configure() {
        super.configure(ModelPermission.class, ModelPermissionSpecification.class);
    }



    public ModelPermissionAdminServiceImpl(ModelPermissionDao dao) {
        super(dao);
    }

}
