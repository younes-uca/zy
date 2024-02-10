package ma.zs.stocky.service.impl.admin.security;


import ma.zs.stocky.bean.core.security.User;
import ma.zs.stocky.dao.criteria.core.security.UserCriteria;
import ma.zs.stocky.dao.facade.core.security.UserDao;
import ma.zs.stocky.dao.specification.core.security.UserSpecification;
import ma.zs.stocky.service.facade.admin.security.UserAdminService;
import ma.zs.stocky.zynerator.service.AbstractServiceImpl;
import ma.zs.stocky.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.zs.stocky.service.facade.admin.security.RoleUserAdminService ;
import ma.zs.stocky.bean.core.security.RoleUser ;

import java.util.List;
@Service
public class UserAdminServiceImpl extends AbstractServiceImpl<User, UserCriteria, UserDao> implements UserAdminService {


    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public User create(User t) {
        User saved= super.create(t);
        if (saved != null && t.getRoleUsers() != null) {
                t.getRoleUsers().forEach(element-> {
                    element.setUser(saved);
                    roleUserService.create(element);
            });
        }
        return saved;

    }

    public User findWithAssociatedLists(Long id){
        User result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setRoleUsers(roleUserService.findByUserId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        roleUserService.deleteByUserId(id);
    }


    public void updateWithAssociatedLists(User user){
    if(user !=null && user.getId() != null){
            List<List<RoleUser>> resultRoleUsers= roleUserService.getToBeSavedAndToBeDeleted(roleUserService.findByUserId(user.getId()),user.getRoleUsers());
            roleUserService.delete(resultRoleUsers.get(1));
            ListUtil.emptyIfNull(resultRoleUsers.get(0)).forEach(e -> e.setUser(user));
            roleUserService.update(resultRoleUsers.get(0),true);
    }
    }











    public void configure() {
        super.configure(User.class, UserSpecification.class);
    }


    @Autowired
    private RoleUserAdminService roleUserService ;

    public UserAdminServiceImpl(UserDao dao) {
        super(dao);
    }

}
