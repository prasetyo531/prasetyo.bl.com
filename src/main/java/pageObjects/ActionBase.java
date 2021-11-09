package pageObjects;

import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.DriverFactory;

import java.time.Duration;
import java.util.NoSuchElementException;

import static io.appium.java_client.touch.TapOptions.tapOptions;
import static io.appium.java_client.touch.WaitOptions.waitOptions;
import static io.appium.java_client.touch.offset.ElementOption.element;

public class ActionBase extends DriverFactory {

    /**********************************************************************************
     WAIT METHODS
     **********************************************************************************/
    public boolean WaitUntilElementIsVisible(MobileElement mobileElement) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, 15);
            wait.until(ExpectedConditions.visibilityOf(mobileElement));
            System.out.println("WebElement is visible using locator: " + "<" + mobileElement.toString() + ">");
            return true;
        } catch (Exception e) {
            System.out.println("WebElement is NOT visible, using locator: " + "<" + mobileElement.toString() + ">");
            Assert.fail("WebElement is NOT visible, Exception: " + e.getMessage());
            return false;
        }
    }

    /**********************************************************************************
     SENDKEYS
     *********************************************************************************/
    public void inputValue(MobileElement mobileElement, String value) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.visibilityOf(mobileElement));
            mobileElement.clear();
            mobileElement.setValue(value);
            System.out.println("element is present");
        } catch (NoSuchElementException e) {
            System.out.println("element is not present");
            Assert.fail("Unable to send keys to WebElement, Exception: " + e.getMessage());
        }
    }

    public void tapByElement(MobileElement mobileElement) {
        try {
            new TouchAction(driver)
                    .tap(tapOptions().withElement(element(mobileElement)))
                    .waitAction(waitOptions(Duration.ofMillis(250))).perform();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
