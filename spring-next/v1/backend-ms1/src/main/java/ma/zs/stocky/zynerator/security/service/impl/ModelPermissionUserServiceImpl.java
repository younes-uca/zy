package ma.zs.stocky.zynerator.security.service.impl;


import ma.zs.stocky.zynerator.security.bean.ModelPermissionUser;
import ma.zs.stocky.zynerator.security.dao.criteria.core.ModelPermissionUserCriteria;
import ma.zs.stocky.zynerator.security.dao.facade.core.ModelPermissionUserDao;
import ma.zs.stocky.zynerator.security.dao.specification.core.ModelPermissionUserSpecification;
import ma.zs.stocky.zynerator.security.service.facade.ActionPermissionService;
import ma.zs.stocky.zynerator.security.service.facade.ModelPermissionService;
import ma.zs.stocky.zynerator.security.service.facade.ModelPermissionUserService;
import ma.zs.stocky.zynerator.security.service.facade.UserService;
import ma.zs.stocky.zynerator.service.AbstractServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModelPermissionUserServiceImpl extends AbstractServiceImpl<ModelPermissionUser, ModelPermissionUserCriteria, ModelPermissionUserDao> implements ModelPermissionUserService {






    public List<ModelPermissionUser> findByActionPermissionId(Long id){
        return dao.findByActionPermissionId(id);
    }
    public int deleteByActionPermissionId(Long id){
        return dao.deleteByActionPermissionId(id);
    }
    public long countByActionPermissionReference(String reference){
        return dao.countByActionPermissionReference(reference);
    }
    public List<ModelPermissionUser> findByModelPermissionId(Long id){
        return dao.findByModelPermissionId(id);
    }
    public int deleteByModelPermissionId(Long id){
        return dao.deleteByModelPermissionId(id);
    }
    public long countByModelPermissionReference(String reference){
        return dao.countByModelPermissionReference(reference);
    }
    public List<ModelPermissionUser> findByUserId(Long id){
        return dao.findByUserId(id);
    }
    public int deleteByUserId(Long id){
        return dao.deleteByUserId(id);
    }
    public long countByUserEmail(String email){
        return dao.countByUserEmail(email);
    }

    public Boolean findByUserUsernameAndModelPermissionReferenceAndActionPermissionReference( String username ,  String modelReference,  String actionReference){
        ModelPermissionUser modelPermissionUser = dao.findByUserUsernameAndModelPermissionReferenceAndActionPermissionReference(username, modelReference, actionReference);
        if (modelPermissionUser!=null) return modelPermissionUser.getValue();
        return false;
    }




    public void configure() {
        super.configure(ModelPermissionUser.class, ModelPermissionUserSpecification.class);
    }


    @Autowired
    private ModelPermissionService modelPermissionService ;
    @Autowired
    private UserService utilisateurService ;
    @Autowired
    private ActionPermissionService actionPermissionService ;

    public ModelPermissionUserServiceImpl(ModelPermissionUserDao dao) {
        super(dao);
    }

}
