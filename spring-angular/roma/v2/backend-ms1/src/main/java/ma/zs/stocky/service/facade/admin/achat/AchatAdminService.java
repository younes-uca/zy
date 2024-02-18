package ma.zs.stocky.service.facade.admin.achat;

import java.util.List;
import ma.zs.stocky.bean.core.achat.Achat;
import ma.zs.stocky.dao.criteria.core.achat.AchatCriteria;
import ma.zs.stocky.zynerator.service.IService;



public interface AchatAdminService extends  IService<Achat,AchatCriteria>  {

    List<Achat> findByClientId(Long id);
    int deleteByClientId(Long id);
    long countByClientCin(String cin);




}
