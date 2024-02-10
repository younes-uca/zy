package ma.zs.stocky.service.facade.admin.security;

import java.util.List;
import ma.zs.stocky.bean.core.security.ModelPermissionUser;
import ma.zs.stocky.dao.criteria.core.security.ModelPermissionUserCriteria;
import ma.zs.stocky.zynerator.service.IService;



public interface ModelPermissionUserAdminService extends  IService<ModelPermissionUser,ModelPermissionUserCriteria>  {

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
