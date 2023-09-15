package org.mouthaan.demo.steps;


import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selectors.byText;
import static com.codeborne.selenide.Selenide.*;

import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;

import com.codeborne.selenide.Configuration;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.mouthaan.demo.pages.GoogleSearchPage;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

@RunWith(Cucumber.class)
public class HomeMenus {

  @Given("open browser with xbox.com")
  public void openGoogleSearch() {
    Configuration.reportsFolder = "target/surefire-reports";
    WebDriverManager.chromedriver().setup();

    //-------------------------------------------------------------------------
    open("https://www.xbox.com/es-ES/");
    sleep(500);
    if ($(byText("Accept")).isDisplayed()) {
      $(byText("Accept")).shouldBe(visible).click();
      $(byText("Accept")).should(disappear);
    }
  }

  @When("Navigate to Menu1")
  public void enterKeyword() {
    String Title2= "//*[@id='uhf-c-nav']/ul/li/div/button/span";
    sleep(1000);
    $x(Title2).shouldBe(visible).click();
  }

  @Then("Click on accessories1")
  public void topTenMatchesShouldBeShown() {
    String Title= "//*[@id='shellmenu_18']";
    sleep(1000);
    $x(Title).shouldBe(visible).click();
  }

  @Then("Close popup and check Title1")
  public void theFirstOneShouldContainKeyword() {
    String close = "//*[@id=\"wcpConsentBannerCtrl\"]/div[2]/button[1]";
    String currentStringBoxtitle = "//*[@id='feature-uid1c62']/div/div/div/div/h1";
    
       if ($(byText("Accept")).isDisplayed()) {
      $(byText("Accept")).shouldBe(visible).click();
      $(byText("Accept")).should(disappear);
    }
    $x(close).shouldBe(visible).click();
    sleep(1000);
  }
  @Then( "Check the first image1")
  public void selectResult() {

    String Image = "//*[@id='content-card-uid3f2e']/div/div[1]/div/picture/img";
    $x(Image).shouldBe(visible).shouldBe();;


  }

  @Then("looking {string}")
  public void lookingOption(String write) {
    String search = "//*[@id='search']";
    String OPTION = "//*[@id=\"uhfCatLogo\"]";
    

    $x(search).shouldBe(visible).click();

    $(By.id("cli_shellHeaderSearchInput")).val(write).pressEnter();
    back();
    back();
    $x(OPTION).shouldBe(visible).click();
 

  }
  @Then("navigate to games and swipe element")
  public void Games() {
if ($(byText("Español")).isDisplayed()) {
      $(byText("Español")).shouldBe(visible).click();
      $(byText("Español")).should(disappear);
    }


    String search = "//*[@id=\"ContentBlockList_3\"]/div/div/a[5]/div/div/img";
   
    String SWIPE1 = "//*[@id=\"BodyContent\"]/div[1]/div/div[2]/ol/li[2]";
    
    String SWIPE2 = "//*[@id=\"BodyContent\"]/div[1]/div/div[2]/ol/li[6]";
    String SWIPE3 = "//*[@id=\"BodyContent\"]/div[1]/div/div[2]/ol/li[9]";
    sleep(1000);
  
    $x(search).shouldBe(visible).click();
    



  }

  @Then("search the name {string}")
  public void Name(String name) {
    String search = "//*[@id=\"gamepass-root\"]/div/div/header/div/div[1]/div/div[2]/form/div/div/input";
    $x(search).shouldBe(visible).click();
    $x(search).sendKeys(name);
    $x(search).shouldBe(visible).pressEnter();
  }
  @Then("search the game {string}")
  public void Game(String fall) {
    String search = "//*[@id='gamepass-root']/div/div/header/div/div[1]/div/div[2]/form/div/div/input";
    back();
    $x(search).shouldBe(visible).click();
    $x(search).sendKeys(fall);
    $x(search).shouldBe(visible).pressEnter();

  }
}
