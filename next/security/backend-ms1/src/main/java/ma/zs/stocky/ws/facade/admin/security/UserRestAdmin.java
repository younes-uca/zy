package  ma.zs.stocky.ws.facade.admin.security;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.zs.stocky.bean.core.security.User;
import ma.zs.stocky.dao.criteria.core.security.UserCriteria;
import ma.zs.stocky.service.facade.admin.security.UserAdminService;
import ma.zs.stocky.ws.converter.security.UserConverter;
import ma.zs.stocky.ws.dto.security.UserDto;
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
@RequestMapping("/api/admin/user/")
public class UserRestAdmin  extends AbstractController<User, UserDto, UserCriteria, UserAdminService, UserConverter> {



    @Operation(summary = "upload one user")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple users")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all users")
    @GetMapping("")
    public ResponseEntity<List<UserDto>> findAll() throws Exception {
        return super.findAll();
    }



    @Operation(summary = "Saves the specified  user")
    @PostMapping("")
    public ResponseEntity<UserDto> save(@RequestBody UserDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  user")
    @PutMapping("")
    public ResponseEntity<UserDto> update(@RequestBody UserDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of user")
    @PostMapping("multiple")
    public ResponseEntity<List<UserDto>> delete(@RequestBody List<UserDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified user")
    @DeleteMapping("")
    public ResponseEntity<UserDto> delete(@RequestBody UserDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified user")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple users by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }



    @Operation(summary = "Finds a user and associated list by id")
    @GetMapping("id/{id}")
    public ResponseEntity<UserDto> findById(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @Operation(summary = "Finds users by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<UserDto>> findByCriteria(@RequestBody UserCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated users by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody UserCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports users by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody UserCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets user data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody UserCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public UserRestAdmin (UserAdminService service, UserConverter converter) {
        super(service, converter);
    }




}
