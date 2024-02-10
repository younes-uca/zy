package ma.zs.stocky.integration.core.security.model-permission;

import com.intuit.karate.junit4.Karate;
import org.junit.runner.RunWith;

public class ModelPermissionIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("ModelPermissionHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
