package ma.zs.stocky.integration.core.security.role;

import com.intuit.karate.junit4.Karate;
import org.junit.runner.RunWith;

public class RoleIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("RoleHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
