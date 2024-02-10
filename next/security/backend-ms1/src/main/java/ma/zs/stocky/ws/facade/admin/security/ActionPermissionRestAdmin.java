package  ma.zs.stocky.ws.facade.admin.security;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.zs.stocky.bean.core.security.ActionPermission;
import ma.zs.stocky.dao.criteria.core.security.ActionPermissionCriteria;
import ma.zs.stocky.service.facade.admin.security.ActionPermissionAdminService;
import ma.zs.stocky.ws.converter.security.ActionPermissionConverter;
import ma.zs.stocky.ws.dto.security.ActionPermissionDto;
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
@RequestMapping("/api/admin/actionPermission/")
public class ActionPermissionRestAdmin  extends AbstractController<ActionPermission, ActionPermissionDto, ActionPermissionCriteria, ActionPermissionAdminService, ActionPermissionConverter> {



    @Operation(summary = "upload one actionPermission")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple actionPermissions")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all actionPermissions")
    @GetMapping("")
    public ResponseEntity<List<ActionPermissionDto>> findAll() throws Exception {
        return super.findAll();
    }



    @Operation(summary = "Saves the specified  actionPermission")
    @PostMapping("")
    public ResponseEntity<ActionPermissionDto> save(@RequestBody ActionPermissionDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  actionPermission")
    @PutMapping("")
    public ResponseEntity<ActionPermissionDto> update(@RequestBody ActionPermissionDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of actionPermission")
    @PostMapping("multiple")
    public ResponseEntity<List<ActionPermissionDto>> delete(@RequestBody List<ActionPermissionDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified actionPermission")
    @DeleteMapping("")
    public ResponseEntity<ActionPermissionDto> delete(@RequestBody ActionPermissionDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified actionPermission")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple actionPermissions by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }



    @Operation(summary = "Finds a actionPermission and associated list by id")
    @GetMapping("id/{id}")
    public ResponseEntity<ActionPermissionDto> findById(@PathVariable Long id) {
        return super.findById(id);
    }

    @Operation(summary = "Finds actionPermissions by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<ActionPermissionDto>> findByCriteria(@RequestBody ActionPermissionCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated actionPermissions by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody ActionPermissionCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports actionPermissions by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody ActionPermissionCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets actionPermission data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody ActionPermissionCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public ActionPermissionRestAdmin (ActionPermissionAdminService service, ActionPermissionConverter converter) {
        super(service, converter);
    }




}
