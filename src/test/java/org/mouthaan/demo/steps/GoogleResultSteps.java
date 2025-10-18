package org.mouthaan.demo.steps;

import cucumber.api.java.en.Then;
import org.mouthaan.demo.pages.GoogleResultPage;

public class GoogleResultSteps {

    private GoogleResultPage googleResultPage = new GoogleResultPage();

        @Then("the first result must be {string}")
        public void theFirstResultMustBe(String result) {
         googleResultPage.verifyResultAtPosition(1, result);
}



}
