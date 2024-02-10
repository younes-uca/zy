package ma.zs.stocky.service.facade.admin.security;

import java.util.List;
import ma.zs.stocky.bean.core.security.RoleUser;
import ma.zs.stocky.dao.criteria.core.security.RoleUserCriteria;
import ma.zs.stocky.zynerator.service.IService;



public interface RoleUserAdminService extends  IService<RoleUser,RoleUserCriteria>  {

    List<RoleUser> findByUserId(Long id);
    int deleteByUserId(Long id);
    long countByUserId(Long id);
    List<RoleUser> findByRoleId(Long id);
    int deleteByRoleId(Long id);
    long countByRoleAuthority(String authority);




}
