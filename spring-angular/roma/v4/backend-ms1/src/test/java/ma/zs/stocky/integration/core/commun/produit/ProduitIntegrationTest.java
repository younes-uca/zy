package ma.zs.stocky.integration.core.commun.produit;

import com.intuit.karate.junit4.Karate;
import org.junit.runner.RunWith;

public class ProduitIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("ProduitHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
