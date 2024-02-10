package  ma.zs.stocky.ws.facade.admin.security;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.zs.stocky.bean.core.security.ModelPermissionUser;
import ma.zs.stocky.dao.criteria.core.security.ModelPermissionUserCriteria;
import ma.zs.stocky.service.facade.admin.security.ModelPermissionUserAdminService;
import ma.zs.stocky.ws.converter.security.ModelPermissionUserConverter;
import ma.zs.stocky.ws.dto.security.ModelPermissionUserDto;
import ma.zs.stocky.zynerator.controller.AbstractController;
import ma.zs.stocky.zynerator.dto.AuditEntityDto;
import ma.zs.stocky.zynerator.util.PaginatedList;


import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zs.stocky.zynerator.process.Result;


import org.springframework.web.multipart.MultipartFile;
import ma.zs.stocky.zynerator.dto.FileTempDto;

@RestController
@RequestMapping("/api/admin/modelPermissionUser/")
public class ModelPermissionUserRestAdmin  extends AbstractController<ModelPermissionUser, ModelPermissionUserDto, ModelPermissionUserCriteria, ModelPermissionUserAdminService, ModelPermissionUserConverter> {



    @Operation(summary = "upload one modelPermissionUser")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple modelPermissionUsers")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all modelPermissionUsers")
    @GetMapping("")
    public ResponseEntity<List<ModelPermissionUserDto>> findAll() throws Exception {
        return super.findAll();
    }



    @Operation(summary = "Saves the specified  modelPermissionUser")
    @PostMapping("")
    public ResponseEntity<ModelPermissionUserDto> save(@RequestBody ModelPermissionUserDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  modelPermissionUser")
    @PutMapping("")
    public ResponseEntity<ModelPermissionUserDto> update(@RequestBody ModelPermissionUserDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of modelPermissionUser")
    @PostMapping("multiple")
    public ResponseEntity<List<ModelPermissionUserDto>> delete(@RequestBody List<ModelPermissionUserDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified modelPermissionUser")
    @DeleteMapping("")
    public ResponseEntity<ModelPermissionUserDto> delete(@RequestBody ModelPermissionUserDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified modelPermissionUser")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple modelPermissionUsers by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "find by actionPermission id")
    @GetMapping("actionPermission/id/{id}")
    public List<ModelPermissionUserDto> findByActionPermissionId(@PathVariable Long id){
        return findDtos(service.findByActionPermissionId(id));
    }
    @Operation(summary = "delete by actionPermission id")
    @DeleteMapping("actionPermission/id/{id}")
    public int deleteByActionPermissionId(@PathVariable Long id){
        return service.deleteByActionPermissionId(id);
    }
    @Operation(summary = "find by modelPermission id")
    @GetMapping("modelPermission/id/{id}")
    public List<ModelPermissionUserDto> findByModelPermissionId(@PathVariable Long id){
        return findDtos(service.findByModelPermissionId(id));
    }
    @Operation(summary = "delete by modelPermission id")
    @DeleteMapping("modelPermission/id/{id}")
    public int deleteByModelPermissionId(@PathVariable Long id){
        return service.deleteByModelPermissionId(id);
    }
    @Operation(summary = "find by user id")
    @GetMapping("user/id/{id}")
    public List<ModelPermissionUserDto> findByUserId(@PathVariable Long id){
        return findDtos(service.findByUserId(id));
    }
    @Operation(summary = "delete by user id")
    @DeleteMapping("user/id/{id}")
    public int deleteByUserId(@PathVariable Long id){
        return service.deleteByUserId(id);
    }

    @Operation(summary = "Finds a modelPermissionUser and associated list by id")
    @GetMapping("id/{id}")
    public ResponseEntity<ModelPermissionUserDto> findById(@PathVariable Long id) {
        return super.findById(id);
    }

    @Operation(summary = "Finds modelPermissionUsers by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<ModelPermissionUserDto>> findByCriteria(@RequestBody ModelPermissionUserCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated modelPermissionUsers by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody ModelPermissionUserCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports modelPermissionUsers by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody ModelPermissionUserCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets modelPermissionUser data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody ModelPermissionUserCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public ModelPermissionUserRestAdmin (ModelPermissionUserAdminService service, ModelPermissionUserConverter converter) {
        super(service, converter);
    }




}
