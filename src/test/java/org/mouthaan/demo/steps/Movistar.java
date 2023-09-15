package org.mouthaan.demo.steps;

import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.*;


import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import io.github.bonigarcia.wdm.WebDriverManager;

import com.codeborne.selenide.Configuration;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.mouthaan.demo.pages.GoogleSearchPage;
import org.openqa.selenium.By;


/**
 *
 */
@RunWith(Cucumber.class)
public class Movistar {

  @Given("an open browser with Movistar.com")
  public void openURLSearch() {
  
      Configuration.headless = true;


    open("https://www.movistar.es/particulares/movistarplus/");
    sleep(500);

  }

  @When("Complete input with {string} and check cookies")
  public void enterName(String name1) {
    String cookies= "//*[@id='onetrust-pc-btn-handler']";
   String cookiesNo= "//*[@id='onetrust-pc-sdk']/div/div[3]/div[1]/button";
    String name= "//*[@id='inputsupportadnsearch']";
    String Title= "//*[@id=\"__next\"]/header/div[2]/div[1]/div[1]/a[7]/div/span";

    if ($(By.xpath(cookies)).isDisplayed()) {
      $(By.xpath(cookies)).shouldBe(visible).click();
      $x(cookiesNo).click();
    }
    Assert.assertTrue("Más servicios", $x(Title).exists());
    $x(name).sendKeys(name1);
  }

  @Then("Complete input with {string}")
  public void enterPassword(String password) {
    String Title2= "//*[@id='inputsupportadnsearch']";
    $x(Title2).sendKeys(password);
  }

  @Then("Check Title and click play video")
  public void ChangeFilter() {
    String playVid = "//*[@id='__next']/div/div[1]/div/div/div[2]";
    String currentStringBoxtitle = "//*[@id='__next']/div/div[1]/div/div/div[1]/div/div[2]/p";

    $x(playVid).click();

  }


  @Then( "Check the navigation and add Zipcode {string}")
  public void selectResult(String zipcode) {

    String Configure = "//*[@id='__next']/div/div[1]/div/div/div[1]/div/div[6]/div[1]/a";
    String zip = "//*[@id='postalCode']";
    String send = "//*[@id=\"rfs\"]/div/div/div/div[1]/button|//*[@id=\"rfs\"]/div/div/div/div[1]/button";
    String cookies= "//*[@id='onetrust-pc-btn-handler']";
    String cookiesNo= "//*[@id='onetrust-pc-sdk']/div/div[3]/div[1]/button";
    if ($(By.xpath(cookies)).isDisplayed()) {
      $(By.xpath(cookies)).shouldBe(visible).click();
      $x(cookiesNo).click();
    }
    $x(Configure).shouldBe(visible).click();
    $x(zip).sendKeys(zipcode);
    $x(zip).pressEnter();

back();
  }

  @Then("Check previous Steps for contracting")
  public void lookingOptions() {
    String search = "//*[@id=\"__next\"]/div/div[2]/div[1]/h2";
    String continuar= "//*[@id=\"__next\"]/div/div[2]/div[4]/div[1]/div[1]/h2";
    String Selection= "//*[@id=\"__next\"]/div/div[3]/div[1]/p";
    String close="//*[@id=\"__next\"]/div[3]/div/section/div/div/div[2]/div/button";
    String cookies= "//*[@id='onetrust-pc-btn-handler']";
    String cookiesNo= "//*[@id='onetrust-pc-sdk']/div/div[3]/div[1]/button";
    String zip = "//*[@id='postalCode']";
    String send = "//*[@id=\"rfs\"]/div/div/div/div[1]/button|//*[@id=\"rfs\"]/div/div/div/div[1]/button";
    String zipcode = "08223";

    if ($(By.xpath(cookies)).isDisplayed()) {
      $(By.xpath(cookies)).shouldBe(visible).click();
      $x(cookiesNo).click();
    }
    $x(search).scrollTo();
    $x(continuar).scrollTo();
    $x(Selection).scrollTo();






  }
  @Then("Check previous Steps for contracting1")
  public void Shopping() {
    String go = "//*[@id=\"__next\"]/div/div[7]/div[3]/div[2]/div[4]/div/a/div/p";


    String Dispositivo = "//*[@id=\"intwrapper\"]/div/div/div[5]/div[8]/div/div[1]/img";
    String scrollToButton2="//*[@id='__next']/div[5]/div/section/div/div[1]/div[2]/div/ul" ;
    String NoDisp = "//*[@id=\"__next\"]/div/div[8]/div[2]/div[1]/div[4]/div/a";
    String Resumen = "//*[@id='__next']/aside/div/div/div/button";
    String Price="//*[@id='nextfusion']/div[1]/div/div/div[1]/div[2]/article[1]/div/div/div/div[2]/div/div/div[2]/div/span";
    String Confirmation="//*[@id='nextfusion']/div[1]/div/div/div[2]/div/div[2]/a";

    $x(go).scrollTo();
    $x(NoDisp).click();
    $x(Dispositivo).scrollTo();



  }
  @Then("Finish Shopping {string}")
  public void FinishShopping(String string) {

    String nif = "//*[@id=\"placeholder\"]";
    String name = "//*[@id=\"submitNew\"]";
    String surname = "//*[@id='formID_firstSurname']";
    String surname2 = "//*[@id='formID_secondSurname']";
    String email = "//*[@id='formID_email']";
    String mobile = "//*[@id='formID_contactPhone']";
    String backHome = "//*[@id='CustomLink-19']|//*[@id='rfs']/div/span";
    $x(nif).click();
    $x(nif).sendKeys(string);




  }

}
