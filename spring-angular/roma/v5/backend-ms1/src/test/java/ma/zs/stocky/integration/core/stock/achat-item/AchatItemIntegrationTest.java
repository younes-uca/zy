package ma.zs.stocky.integration.core.stock.achat-item;

import com.intuit.karate.junit4.Karate;
import org.junit.runner.RunWith;

public class AchatItemIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("AchatItemHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
