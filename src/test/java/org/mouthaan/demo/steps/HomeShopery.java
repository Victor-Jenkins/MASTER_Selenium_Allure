package org.mouthaan.demo.steps;

import com.codeborne.selenide.Configuration;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

import static com.codeborne.selenide.Condition.disappear;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selectors.byText;
import static com.codeborne.selenide.Selenide.*;


public class HomeShopery {
  @Given("an open browser with Shopery.com")
  public void openGoogleSearch() {

    Configuration.reportsFolder = "target/surefire-reports";



    //-------------------------------------------------------------------------
    WebDriverManager.chromedriver().setup();


    open("https://shopery.com");
    sleep(500);
    if ($(byText("Accept")).isDisplayed()) {
      $(byText("Accept")).shouldBe(visible).click();
      $(byText("Accept")).should(disappear);
    }
  }

  @When("Navigate to Menu")
  public void enterKeyword() {
    String Title2= "//div[@class ='button-text']";
    sleep(1000);
    $x(Title2).shouldBe(visible).click();
  }

  @Then("tres")
  public void topTenMatchesShouldBeShown() {
    String Title= "/html/body/div[1]/div[1]/a/img";
    sleep(1000);
    $x(Title).shouldBe(visible).click();
  }

  @Then("cuatro")
  public void theFirstOneShouldContainKeyword() {
    String currentStringBoxtitle = "/html/body/div[3]/div[1]/h1";
    sleep(1000);
  }
  @Then( "CLICK THE FIRST option1")
  public void selectResult() {
    String Image = "//*[@id='w-node-_964c9ab6-f570-fd51-5727-bf12e53c4a2c-e53c4a29']/a/img";
    sleep(1000);
    $x(Image).shouldBe(visible).shouldBe();


  }
}
