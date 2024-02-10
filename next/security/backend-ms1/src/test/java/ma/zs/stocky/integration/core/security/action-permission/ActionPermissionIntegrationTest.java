package ma.zs.stocky.integration.core.security.action-permission;

import com.intuit.karate.junit4.Karate;
import org.junit.runner.RunWith;

public class ActionPermissionIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("ActionPermissionHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
