package org.mouthaan.demo.pages;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$$;
import static org.junit.Assert.assertTrue;

public class GoogleResultPage {

    // Todos los resultados en Google suelen estar en divs con clase "g"
    private ElementsCollection results = $$(".g");

    public void verifyResultAtPosition(int position, String expectedText) {
        if (position < 1 || position > results.size()) {
            throw new IllegalArgumentException("Posición fuera de rango");
        }

        SelenideElement result = results.get(position - 1);
        String actualText = result.getText();

        assertTrue("El resultado no contiene el texto esperado: " + expectedText,
                actualText.contains(expectedText));
    }
}
