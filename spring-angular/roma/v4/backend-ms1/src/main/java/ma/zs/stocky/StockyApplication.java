package ma.zs.stocky;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import ma.zs.stocky.zynerator.security.bean.*;
import ma.zs.stocky.zynerator.security.common.AuthoritiesConstants;
import ma.zs.stocky.zynerator.security.service.facade.*;


import ma.zs.stocky.zynerator.security.bean.User;
import ma.zs.stocky.zynerator.security.bean.Role;

import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableCaching
//@EnableElasticsearchRepositories("ma.zs.stocky.dao")
//@EnableFeignClients("ma.zs.stocky.required.facade")
public class StockyApplication {
    public static ConfigurableApplicationContext ctx;

    public static void main(String[] args) {
        ctx=SpringApplication.run(StockyApplication.class, args);
    }

    @Bean
    RestTemplate restTemplate(){
        return new RestTemplate();
    }

    @Bean
    ObjectMapper objectMapper(){
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    public static ConfigurableApplicationContext getCtx() {
        return ctx;
    }

    @Bean
    public CommandLineRunner demo(UserService userService, RoleService roleService, ModelPermissionService modelPermissionService, ActionPermissionService actionPermissionService, ModelPermissionUserService modelPermissionUserService) {
    return (args) -> {
        if(true){

        
		// ModelPermissions For admin
		List<ModelPermission> modelPermissions = new ArrayList<>();
		addPermissionForAdmin(modelPermissions);
		modelPermissions.forEach(e -> modelPermissionService.create(e));
		// ActionPermissions For admin
		List<ActionPermission> actionPermissions = new ArrayList<>();
		addActionPermissionForAdmin(actionPermissions);
		actionPermissions.forEach(e -> actionPermissionService.create(e));
				
        
		// User admin
		User userForAdmin = new User("admin");
		userForAdmin.setPassword("123");
		// Role admin
		Role roleForAdmin = new Role();
		roleForAdmin.setAuthority(AuthoritiesConstants.ADMIN);
		roleForAdmin.setCreatedAt(LocalDateTime.now());
		roleService.create(roleForAdmin);
		RoleUser roleUser = new RoleUser();
		roleUser.setRole(roleForAdmin);
		if (userForAdmin.getRoleUsers() == null)
			userForAdmin.setRoleUsers(new ArrayList<>());

		userForAdmin.getRoleUsers().add(roleUser);
		if (userForAdmin.getModelPermissionUsers() == null)
			userForAdmin.setModelPermissionUsers(new ArrayList<>());


        userForAdmin.setModelPermissionUsers(modelPermissionUserService.initModelPermissionUser());

        userService.create(userForAdmin);

            }
        };
    }




    private static String fakeString(String attributeName, int i) {
        return attributeName + i;
    }

    private static Long fakeLong(String attributeName, int i) {
        return  10L * i;
    }
    private static Integer fakeInteger(String attributeName, int i) {
        return  10 * i;
    }

    private static Double fakeDouble(String attributeName, int i) {
        return 10D * i;
    }

    private static BigDecimal fakeBigDecimal(String attributeName, int i) {
        return  BigDecimal.valueOf(i*1L*10);
    }

    private static Boolean fakeBoolean(String attributeName, int i) {
        return i % 2 == 0 ? true : false;
    }
    private static LocalDateTime fakeLocalDateTime(String attributeName, int i) {
        return LocalDateTime.now().plusDays(i);
    }


    private static void addPermissionForAdmin(List<ModelPermission> modelPermissions) {
        modelPermissions.add(new ModelPermission("Client"));
        modelPermissions.add(new ModelPermission("Achat"));
        modelPermissions.add(new ModelPermission("AchatItem"));
        modelPermissions.add(new ModelPermission("Produit"));
        modelPermissions.add(new ModelPermission("User"));
        modelPermissions.add(new ModelPermission("ModelPermission"));
        modelPermissions.add(new ModelPermission("ActionPermission"));
    }

    private static void addActionPermissionForAdmin(List<ActionPermission> actionPermissions) {
        actionPermissions.add(new ActionPermission("list"));
        actionPermissions.add(new ActionPermission("create"));
        actionPermissions.add(new ActionPermission("delete"));
        actionPermissions.add(new ActionPermission("edit"));
        actionPermissions.add(new ActionPermission("view"));
        actionPermissions.add(new ActionPermission("duplicate"));
        }


}


