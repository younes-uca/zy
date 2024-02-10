package ma.zs.stocky.integration.core.security.role-user;

import com.intuit.karate.junit4.Karate;
import org.junit.runner.RunWith;

public class RoleUserIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("RoleUserHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
