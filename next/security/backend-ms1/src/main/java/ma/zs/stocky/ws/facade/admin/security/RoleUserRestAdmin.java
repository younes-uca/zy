package  ma.zs.stocky.ws.facade.admin.security;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.zs.stocky.bean.core.security.RoleUser;
import ma.zs.stocky.dao.criteria.core.security.RoleUserCriteria;
import ma.zs.stocky.service.facade.admin.security.RoleUserAdminService;
import ma.zs.stocky.ws.converter.security.RoleUserConverter;
import ma.zs.stocky.ws.dto.security.RoleUserDto;
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
@RequestMapping("/api/admin/roleUser/")
public class RoleUserRestAdmin  extends AbstractController<RoleUser, RoleUserDto, RoleUserCriteria, RoleUserAdminService, RoleUserConverter> {



    @Operation(summary = "upload one roleUser")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple roleUsers")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all roleUsers")
    @GetMapping("")
    public ResponseEntity<List<RoleUserDto>> findAll() throws Exception {
        return super.findAll();
    }



    @Operation(summary = "Saves the specified  roleUser")
    @PostMapping("")
    public ResponseEntity<RoleUserDto> save(@RequestBody RoleUserDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  roleUser")
    @PutMapping("")
    public ResponseEntity<RoleUserDto> update(@RequestBody RoleUserDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of roleUser")
    @PostMapping("multiple")
    public ResponseEntity<List<RoleUserDto>> delete(@RequestBody List<RoleUserDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified roleUser")
    @DeleteMapping("")
    public ResponseEntity<RoleUserDto> delete(@RequestBody RoleUserDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified roleUser")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple roleUsers by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "find by user id")
    @GetMapping("user/id/{id}")
    public List<RoleUserDto> findByUserId(@PathVariable Long id){
        return findDtos(service.findByUserId(id));
    }
    @Operation(summary = "delete by user id")
    @DeleteMapping("user/id/{id}")
    public int deleteByUserId(@PathVariable Long id){
        return service.deleteByUserId(id);
    }
    @Operation(summary = "find by role id")
    @GetMapping("role/id/{id}")
    public List<RoleUserDto> findByRoleId(@PathVariable Long id){
        return findDtos(service.findByRoleId(id));
    }
    @Operation(summary = "delete by role id")
    @DeleteMapping("role/id/{id}")
    public int deleteByRoleId(@PathVariable Long id){
        return service.deleteByRoleId(id);
    }

    @Operation(summary = "Finds a roleUser and associated list by id")
    @GetMapping("id/{id}")
    public ResponseEntity<RoleUserDto> findById(@PathVariable Long id) {
        return super.findById(id);
    }

    @Operation(summary = "Finds roleUsers by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<RoleUserDto>> findByCriteria(@RequestBody RoleUserCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated roleUsers by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody RoleUserCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports roleUsers by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody RoleUserCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets roleUser data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody RoleUserCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public RoleUserRestAdmin (RoleUserAdminService service, RoleUserConverter converter) {
        super(service, converter);
    }




}
