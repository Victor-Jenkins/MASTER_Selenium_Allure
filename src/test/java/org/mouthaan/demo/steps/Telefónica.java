package org.mouthaan.demo.steps;


import com.codeborne.selenide.Configuration;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Test;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Telefónica {
  @Test
  @Given("an open browser with www.telefonica.com")
  public void openGoogleSearch() {
    WebDriverManager.chromedriver().setup();
    Configuration.reportsFolder = "target/surefire-reports";

    Configuration.browserSize = "390x850";
    open("https://www.telefonica.com/es/");

  }

  @When("Check titles and accept cookies")
  public void enterName() {
    String Title3= "//*[@id=\"primary\"]/div[4]/div/div/a";
    String Title4= "//*[@id=\"primary\"]/div[6]/div/div[1]/div/h2";
    String Title2= "//*[@id=\"primary\"]/div[2]/div/div/div[2]/h2/a/span";
    String Title= "//*[@id=\"primary\"]/div[4]/div/div/a";
    String cookies= "//*[@id='onetrust-pc-btn-handler']";
    String cookiesNo= "//*[@id='onetrust-pc-sdk']/div[3]/div[1]/div/button[1]";

    if ($(By.xpath(cookies)).isDisplayed()) {
      $(By.xpath(cookies)).shouldBe(visible).click();
      $x(cookiesNo).click();
    }
    $x(Title).scrollTo().shouldBe(visible);
    $x(Title2).scrollTo().shouldBe(visible);
    $x(Title3).scrollTo().shouldBe(visible);
    $x(Title4).scrollTo().shouldBe(visible);

  }

  @Then("Check main navigation and select Services")
  public void enterPassword() {
    String main= "//*[@id='tf-main-toggle']";

    String cookies= "//*[@id='barritaloca']/div/div/button[2]";
    String cookiesNo= "//*[@id='capa-total']/div/div/div[3]/div/button[1]";

    if ($(By.xpath(cookies)).isDisplayed()) {
      $(By.xpath(cookies)).shouldBe(visible).click();
      $x(cookiesNo).click();
    }

    $x(main).click();

    sleep(1000);
  }

  @Then("Check main navigation and select Particulars")
  public void ChangeFilter() {
    String Part = "//*[@id=\"primary\"]/div[6]/div/div[1]/div/h2";
    $x(Part).scrollTo();

  }
  @Then( "Check the Navigation and scrolling page")
  public void selectResult() {

    String España = "//*[@id=\"primary\"]/div[6]/div/div[4]/div[1]/div/div/h3";
    String Brasil = "//*[@id=\"primary\"]/div[6]/div/div[4]/div[1]/div/div/h3";
    String Alemania = "//*[@id=\"primary\"]/div[6]/div/div[11]/figure/blockquote";
    String UK = "//*[@id=\"primary\"]/div[7]/div/div[1]/div[1]/div/img";
    $x(España).scrollTo();
    $x(Brasil).scrollTo();
    $x(Alemania).scrollTo();
    $x(UK).scrollTo();

  }

  @Then("Check the contact button")
  public void lookingOptions() {
    String contact = "//*[@id=\"primary\"]/article/div/div[1]/div[1]/h1";
    $x(contact).scrollTo();


  }
  @Then("Click on logo and navigate to stock")
  public void Shopping() {
    String logo = "//*[@id='masthead']/div[2]/div[1]/div";
    String stock = "//*[@id='masthead']/div[2]/div[2]/div[1]";

    $x(logo).click();
    $x(stock).click();

  }


}
