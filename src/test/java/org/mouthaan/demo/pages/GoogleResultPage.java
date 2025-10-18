package org.mouthaan.demo.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.util.List;

public class GoogleResultPage {

    private WebDriver driver;

    public GoogleResultPage(WebDriver driver) {
        this.driver = driver;
    }

    public void verifyResultAtPosition(int position, String expectedText) {
        // En Google, los resultados se suelen encontrar con un selector tipo:
        // div#search .g (cada resultado)
        List<WebElement> results = driver.findElements(By.cssSelector("div#search .g"));

        // Recordar que en Java las listas empiezan en 0
        if (position < 1 || position > results.size()) {
            throw new IllegalArgumentException("Posición fuera de rango");
        }

        String actualText = results.get(position - 1).getText();

        // Validar que el texto esperado está contenido en el resultado
        Assert.assertTrue("El resultado no coincide. Se esperaba que contenga: " + expectedText,
                actualText.contains(expectedText));
    }
}
