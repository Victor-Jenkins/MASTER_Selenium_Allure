$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Home.feature");
formatter.feature({
  "name": "Check the HomePage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user can search XBOX",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an open browser with google.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.openGoogleSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a keyword \"xbox\" is entered in input field",
  "keyword": "When "
});
formatter.match({
  "location": "Home.enterKeyword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "at least top 1 matches should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.topTenMatchesShouldBeShown(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the first one should contain \"xbox.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.theFirstOneShouldContainKeyword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CLICK THE FIRST option",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.selectResult()"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //*[@id\u003d\u0027rso\u0027]/div[1]/div/div/div/div/div/div/div/div[1]/a/h3|//div[@class \u003d\u0027LC20lb MBeuO DKV0Md\u0027]/h3}\nExpected: visible\nScreenshot: file:/home/victor/Escritorio/MASTER_Selenium_Allure/target/surefire-reports/1694733166128.0.png\nPage source: file:/home/victor/Escritorio/MASTER_Selenium_Allure/target/surefire-reports/1694733166128.0.html\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027rso\u0027]/div[1]/div/div/div/div/div/div/div/div[1]/a/h3|//div[@class \u003d\u0027LC20lb MBeuO DKV0Md\u0027]/h3\"}\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:37)\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:100)\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:65)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:24)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:10)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:99)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy20.shouldBe(Unknown Source)\n\tat org.mouthaan.demo.steps.Home.selectResult(Home.java:69)\n\tat ✽.CLICK THE FIRST option(file:src/test/resources/features/Home.feature:10)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027rso\u0027]/div[1]/div/div/div/div/div/div/div/div[1]/a/h3|//div[@class \u003d\u0027LC20lb MBeuO DKV0Md\u0027]/h3\"}\n  (Session info: chrome\u003d117.0.5938.62)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027victor-X555LDB\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2.3-060203-generic\u0027, java.version: \u002711.0.20.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 117.0.5938.62, chrome: {chromedriverVersion: 117.0.5938.62 (25a7172909a4..., userDataDir: /tmp/.org.chromium.Chromium...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:33093}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d05ad985db692ddea4b9c27efa34f8aa\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027rso\u0027]/div[1]/div/div/div/div/div/div/div/div[1]/a/h3|//div[@class \u003d\u0027LC20lb MBeuO DKV0Md\u0027]/h3}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:74)\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:50)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:24)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:10)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:99)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy20.shouldBe(Unknown Source)\n\tat org.mouthaan.demo.steps.Home.selectResult(Home.java:69)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/HomeMenus.feature");
formatter.feature({
  "name": "Check the HomePage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user can search XBOX",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open browser with xbox.com",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeMenus.openGoogleSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Menu1",
  "keyword": "When "
});
formatter.match({
  "location": "HomeMenus.enterKeyword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on accessories1",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeMenus.topTenMatchesShouldBeShown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close popup and check Title1",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeMenus.theFirstOneShouldContainKeyword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the first image1",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeMenus.selectResult()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "looking \"fallout 76\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeMenus.lookingOption(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to games and swipe element",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeMenus.Games()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search the name \"fallout\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeMenus.Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search the game \"Good Job\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeMenus.Game(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/HomeShopery.feature");
formatter.feature({
  "name": "Check the HomePage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user can search Shopery",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an open browser with Shopery.com",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeShopery.openGoogleSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Menu",
  "keyword": "When "
});
formatter.match({
  "location": "HomeShopery.enterKeyword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tres",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeShopery.topTenMatchesShouldBeShown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cuatro",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeShopery.theFirstOneShouldContainKeyword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CLICK THE FIRST option1",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeShopery.selectResult()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Movistar.feature");
formatter.feature({
  "name": "Check the Movistar.com",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user can navigate and search results on Movistar.com",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Telefonica2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an open browser with Movistar.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Movistar.openURLSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete input with \"Hola Carlos :).\" and check cookies",
  "keyword": "When "
});
formatter.match({
  "location": "Movistar.enterName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete input with \" Como estas?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Movistar.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Title and click play video",
  "keyword": "Then "
});
formatter.match({
  "location": "Movistar.ChangeFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the navigation and add Zipcode \"08223\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Movistar.selectResult(String)"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //*[@id\u003d\u0027__next\u0027]/div/div[1]/div/div/div[1]/div/div[6]/div[1]/a}\nExpected: visible\nScreenshot: file:/home/victor/Escritorio/MASTER_Selenium_Allure/target/results/selenide-screenshots/1694733209550.1.png\nPage source: file:/home/victor/Escritorio/MASTER_Selenium_Allure/target/results/selenide-screenshots/1694733209550.1.html\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027__next\u0027]/div/div[1]/div/div/div[1]/div/div[6]/div[1]/a\"}\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:37)\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:100)\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:65)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:24)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:10)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:99)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy20.shouldBe(Unknown Source)\n\tat org.mouthaan.demo.steps.Movistar.selectResult(Movistar.java:83)\n\tat ✽.Check the navigation and add Zipcode \"08223\"(file:src/test/resources/features/Movistar.feature:11)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027__next\u0027]/div/div[1]/div/div/div[1]/div/div[6]/div[1]/a\"}\n  (Session info: chrome\u003d117.0.5938.62)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027victor-X555LDB\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2.3-060203-generic\u0027, java.version: \u002711.0.20.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 117.0.5938.62, chrome: {chromedriverVersion: 117.0.5938.62 (25a7172909a4..., userDataDir: /tmp/.org.chromium.Chromium...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:33093}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d05ad985db692ddea4b9c27efa34f8aa\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027__next\u0027]/div/div[1]/div/div/div[1]/div/div[6]/div[1]/a}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:74)\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:50)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:24)\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:10)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:99)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy20.shouldBe(Unknown Source)\n\tat org.mouthaan.demo.steps.Movistar.selectResult(Movistar.java:83)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
formatter.step({
  "name": "Check previous Steps for contracting",
  "keyword": "Then "
});
formatter.match({
  "location": "Movistar.lookingOptions()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check previous Steps for contracting1",
  "keyword": "Then "
});
formatter.match({
  "location": "Movistar.Shopping()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Finish Shopping \"Sudo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Movistar.FinishShopping(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/Shopery.feature");
formatter.feature({
  "name": "Check the HomePage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user can search Shopery",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open browser with google.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Shopery.openGoogleSearch1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the keyword \"Shoperyy\" is entered in input field",
  "keyword": "When "
});
formatter.match({
  "location": "Shopery.enterKeyword1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "at a least top 1 matches should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Shopery.topTenMatchesShouldBeShown1(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a first one should contain \"shopery.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Shopery.theFirstOneShouldContainKeyword1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CLICK1 THE FIRST option",
  "keyword": "Then "
});
formatter.match({
  "location": "Shopery.selectResult1()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Telefónica.feature");
formatter.feature({
  "name": "Check the www.telefonica.com",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user can navigate and search results in responsive mobile mode on www.telefonica.com",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Telefonica"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an open browser with www.telefonica.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Telefónica.openGoogleSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check titles and accept cookies",
  "keyword": "When "
});
formatter.match({
  "location": "Telefónica.enterName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check main navigation and select Services",
  "keyword": "Then "
});
formatter.match({
  "location": "Telefónica.enterPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check main navigation and select Particulars",
  "keyword": "Then "
});
formatter.match({
  "location": "Telefónica.ChangeFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the Navigation and scrolling page",
  "keyword": "Then "
});
formatter.match({
  "location": "Telefónica.selectResult()"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //*[@id\u003d\"primary\"]/div[6]/div/div[11]/figure/blockquote}\nExpected: exist\nScreenshot: file:/home/victor/Escritorio/MASTER_Selenium_Allure/target/surefire-reports/1694733233843.2.png\nPage source: file:/home/victor/Escritorio/MASTER_Selenium_Allure/target/surefire-reports/1694733233843.2.html\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"primary\"]/div[6]/div/div[11]/figure/blockquote\"}\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:37)\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:100)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:131)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy20.scrollTo(Unknown Source)\n\tat org.mouthaan.demo.steps.Telefónica.selectResult(Telefónica.java:82)\n\tat ✽.Check the Navigation and scrolling page(file:src/test/resources/features/Telefónica.feature:10)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"primary\"]/div[6]/div/div[11]/figure/blockquote\"}\n  (Session info: chrome\u003d117.0.5938.62)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027victor-X555LDB\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2.3-060203-generic\u0027, java.version: \u002711.0.20.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 117.0.5938.62, chrome: {chromedriverVersion: 117.0.5938.62 (25a7172909a4..., userDataDir: /tmp/.org.chromium.Chromium...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:33093}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d05ad985db692ddea4b9c27efa34f8aa\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"primary\"]/div[6]/div/div[11]/figure/blockquote}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:74)\n\tat com.codeborne.selenide.commands.ScrollTo.execute(ScrollTo.java:12)\n\tat com.codeborne.selenide.commands.ScrollTo.execute(ScrollTo.java:9)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:99)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy20.scrollTo(Unknown Source)\n\tat org.mouthaan.demo.steps.Telefónica.selectResult(Telefónica.java:82)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
formatter.step({
  "name": "Check the contact button",
  "keyword": "Then "
});
formatter.match({
  "location": "Telefónica.lookingOptions()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on logo and navigate to stock",
  "keyword": "Then "
});
formatter.match({
  "location": "Telefónica.Shopping()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/demo.feature");
formatter.feature({
  "name": "Just a simple demo",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sum of two",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "number 10 and number 20",
  "keyword": "Given "
});
formatter.match({
  "location": "SimpleDemoSteps.numberAndNumber(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the numbers are added together",
  "keyword": "When "
});
formatter.match({
  "location": "SimpleDemoSteps.theNumbersAreAddedTogether()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum must be equal to 30",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleDemoSteps.theSumMustBeEqualTo(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Sum of two",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "number \u003ca\u003e and number \u003cb\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the numbers are added together",
  "keyword": "When "
});
formatter.step({
  "name": "the sum must be equal to \u003cc\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "a",
        "b",
        "c"
      ]
    },
    {
      "cells": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "cells": [
        "2",
        "4",
        "6"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sum of two",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "number 1 and number 2",
  "keyword": "Given "
});
formatter.match({
  "location": "SimpleDemoSteps.numberAndNumber(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the numbers are added together",
  "keyword": "When "
});
formatter.match({
  "location": "SimpleDemoSteps.theNumbersAreAddedTogether()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum must be equal to 3",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleDemoSteps.theSumMustBeEqualTo(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sum of two",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "number 2 and number 4",
  "keyword": "Given "
});
formatter.match({
  "location": "SimpleDemoSteps.numberAndNumber(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the numbers are added together",
  "keyword": "When "
});
formatter.match({
  "location": "SimpleDemoSteps.theNumbersAreAddedTogether()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sum must be equal to 6",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleDemoSteps.theSumMustBeEqualTo(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/google-books.feature");
formatter.feature({
  "name": "Google Api books",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User calls web service to get a book by it\u0027s ISBN",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a book exists with an isbn of \"9781451648546\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BookByISBNSteps.aBookExistsWithAnIsbnOf(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user retrieves the book by isbn",
  "keyword": "When "
});
formatter.match({
  "location": "BookByISBNSteps.aUserRetrievesTheBookByIsbn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "BookByISBNSteps.theStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "totalItems",
        "1"
      ]
    },
    {
      "cells": [
        "kind",
        "books#volumes"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookByISBNSteps.responseIncludesTheFollowing(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response includes the following in any order",
  "rows": [
    {
      "cells": [
        "items.volumeInfo.title",
        "Steve Jobs"
      ]
    },
    {
      "cells": [
        "items.volumeInfo.publisher",
        "Simon and Schuster"
      ]
    },
    {
      "cells": [
        "items.volumeInfo.pageCount",
        "630"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookByISBNSteps.responseIncludesTheFollowingInAnyOrder(String,String\u003e)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path items.volumeInfo.pageCount doesn\u0027t match.\nExpected: iterable with items [\u003c630\u003e] in any order\n  Actual: [656]\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:237)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:492)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:260)\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:107)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\n\tat org.mouthaan.demo.steps.BookByISBNSteps.lambda$responseIncludesTheFollowingInAnyOrder$1(BookByISBNSteps.java:56)\n\tat java.base/java.util.LinkedHashMap.forEach(LinkedHashMap.java:684)\n\tat java.base/java.util.Collections$UnmodifiableMap.forEach(Collections.java:1505)\n\tat org.mouthaan.demo.steps.BookByISBNSteps.responseIncludesTheFollowingInAnyOrder(BookByISBNSteps.java:54)\n\tat ✽.response includes the following in any order(file:src/test/resources/features/google-books.feature:9)\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search on Google",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the Google search page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchSteps.theGoogleSearchPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we search for \"hello world\"",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchSteps.weForSearch(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d117.0.5938.62)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027victor-X555LDB\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2.3-060203-generic\u0027, java.version: \u002711.0.20.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 117.0.5938.62, chrome: {chromedriverVersion: 117.0.5938.62 (25a7172909a4..., userDataDir: /tmp/.org.chromium.Chromium...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:33093}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d05ad985db692ddea4b9c27efa34f8aa\nScreenshot: file:/home/victor/Escritorio/MASTER_Selenium_Allure/target/results/selenide-screenshots/1694733245314.3.png\nPage source: file:/home/victor/Escritorio/MASTER_Selenium_Allure/target/results/selenide-screenshots/1694733245314.3.html\nTimeout: 4 s.\nCaused by: ElementNotInteractableException: element not interactable\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:125)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy20.val(Unknown Source)\n\tat org.mouthaan.demo.pages.GoogleSearchPage.googleSearchFor(GoogleSearchPage.java:18)\n\tat org.mouthaan.demo.steps.GoogleSearchSteps.weForSearch(GoogleSearchSteps.java:18)\n\tat ✽.we search for \"hello world\"(file:src/test/resources/features/google.feature:4)\nCaused by: org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d117.0.5938.62)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027victor-X555LDB\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2.3-060203-generic\u0027, java.version: \u002711.0.20.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 117.0.5938.62, chrome: {chromedriverVersion: 117.0.5938.62 (25a7172909a4..., userDataDir: /tmp/.org.chromium.Chromium...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:33093}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d05ad985db692ddea4b9c27efa34f8aa\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat com.codeborne.selenide.commands.SetValue.setValueForTextInput(SetValue.java:59)\n\tat com.codeborne.selenide.commands.SetValue.execute(SetValue.java:42)\n\tat com.codeborne.selenide.commands.Val.execute(Val.java:27)\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:99)\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\n\tat com.sun.proxy.$Proxy20.val(Unknown Source)\n\tat org.mouthaan.demo.pages.GoogleSearchPage.googleSearchFor(GoogleSearchPage.java:18)\n\tat org.mouthaan.demo.steps.GoogleSearchSteps.weForSearch(GoogleSearchSteps.java:18)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
formatter.step({
  "name": "the first result must be \"hell world\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleResultSteps.theFirstResultMustBe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/restcall.feature");
formatter.feature({
  "name": "RestCall basics",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Rest Call GET",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Ik succesvol een REST call verstuur met de methode GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RestCallSteps.theFirstResultMustBe()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Rest Call POST",
  "description": "    Given: ik een typfout maak in de feature file verschijnt er een paarse balk",
  "keyword": "Scenario"
});
});