package ma.zs.stocky.integration.core.security.user;

import com.intuit.karate.junit4.Karate;
import org.junit.runner.RunWith;

public class UserIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("UserHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
