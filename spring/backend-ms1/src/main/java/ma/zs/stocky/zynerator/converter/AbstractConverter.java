package ma.zs.stocky.zynerator.converter;


import ma.zs.stocky.zynerator.bean.Etablissement;
import ma.zs.stocky.zynerator.dto.EtablissementDto;

import ma.zs.stocky.zynerator.util.ListUtil;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;
import ma.zs.stocky.zynerator.bean.BusinessObject;
import ma.zs.stocky.zynerator.dto.AuditBaseDto;
import ma.zs.stocky.zynerator.dto.BaseDto;
import ma.zs.stocky.zynerator.util.DateUtil;
import ma.zs.stocky.zynerator.util.RefelexivityUtil;
import ma.zs.stocky.zynerator.util.StringUtil;
import ma.zs.stocky.zynerator.util.Utils;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public abstract class AbstractConverter<T extends BusinessObject, DTO extends BaseDto> {
    protected int maxLevel = 2;
    protected Class<T> itemType;
    protected Class<DTO> dtoType;

    protected AbstractConverter(Class<T> itemType, Class<DTO> dtoType) {
        this.itemType = itemType;
        this.dtoType = dtoType;
        this.init(true);
    }

    public abstract T toItem(DTO dto);

    public abstract DTO toDto(T item);

    public void copy(DTO dto, T t) {
        T myItem = toItem(dto);
        Utils.copyNonNullProperties(myItem,t);
    }
/*
    public void convertEtablissement(T item, DTO dto) {
        if (dto.getEtablissementDto() != null && dto.getEtablissementDto().getId() != null) {
            item.setEtablissement(new Etablissement());
            item.getEtablissement().setId(dto.getEtablissementDto().getId());
        }
    }

    public void convertEtablissement(DTO dto, T item) {
        if (item.getEtablissement() != null && item.getEtablissement().getId() != null) {
            dto.setEtablissementDto(new EtablissementDto());
            dto.getEtablissementDto().setId(item.getEtablissement().getId());
        }
    }
*/
    public List<T> toItem(List<DTO> dtos) {
        List<T> items = new ArrayList<>();
        if (dtos != null && !dtos.isEmpty()) {
            for (DTO DTO : dtos) {
                items.add(toItem(DTO));
            }
        }
        return items;
    }

    public T getById(DTO dto) {
        T result = null;
        if (dto != null) {
            try {
                result = itemType.getDeclaredConstructor(Long.class).newInstance(dto.getId());
            } catch (NoSuchMethodException | InstantiationException | IllegalAccessException |
                     InvocationTargetException e) {
                throw new RuntimeException(e);
            }
        }
        return result;
    }

    public DTO getById(T t) {
        DTO result = null;
        if (t != null) {
            try {
                result = dtoType.getDeclaredConstructor(Long.class).newInstance(t.getId());
            } catch (NoSuchMethodException | InstantiationException | IllegalAccessException |
                     InvocationTargetException e) {
                throw new RuntimeException(e);
            }
        }
        return result;
    }


    public List<DTO> toDto(List<T> items) {
        List<DTO> dtos = new ArrayList();
        if (items != null && !items.isEmpty()) {
            for (T item : items) {
                dtos.add(toDto(item));
            }
        }
        return dtos;
    }

    public List<DTO> toDto(List<T> items) {
        List<DTO> dtos = new ArrayList<>();
        if (items != null && !items.isEmpty()) {
            for (T item : items) {
                dtos.add(toDto(item));
            }
        }
        return dtos;
    }

                                                        public void initObject(boolean initialisationObject){

    }

    public void initList(boolean initialisationList){

    }

    public void init(boolean initialisation){
        initObject(initialisation);
        initList(initialisation);
    }

    public int getMaxLevel() {
        return maxLevel;
    }

    public void setMaxLevel(int maxLevel) {
        this.maxLevel = maxLevel;
    }
}
