package ma.zs.stocky.integration.core.security.model-permission-user;

import com.intuit.karate.junit4.Karate;
import org.junit.runner.RunWith;

public class ModelPermissionUserIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("ModelPermissionUserHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
