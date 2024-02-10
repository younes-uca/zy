package ma.zs.stocky.service.impl.admin.security;


import ma.zs.stocky.bean.core.security.ActionPermission;
import ma.zs.stocky.dao.criteria.core.security.ActionPermissionCriteria;
import ma.zs.stocky.dao.facade.core.security.ActionPermissionDao;
import ma.zs.stocky.dao.specification.core.security.ActionPermissionSpecification;
import ma.zs.stocky.service.facade.admin.security.ActionPermissionAdminService;
import ma.zs.stocky.zynerator.service.AbstractServiceImpl;
import ma.zs.stocky.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class ActionPermissionAdminServiceImpl extends AbstractServiceImpl<ActionPermission, ActionPermissionCriteria, ActionPermissionDao> implements ActionPermissionAdminService {













    public void configure() {
        super.configure(ActionPermission.class, ActionPermissionSpecification.class);
    }



    public ActionPermissionAdminServiceImpl(ActionPermissionDao dao) {
        super(dao);
    }

}
