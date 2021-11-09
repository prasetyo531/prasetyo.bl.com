package pageObjects;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class Homescreen extends ActionBase{

    @AndroidFindBy(xpath="//android.widget.TextView[contains(@resource-id, 'com.loginmodule.learning:id/textViewName') and @index='2']")
    public MobileElement helloEmail;

    // This is a constructor, as every page need a base driver to find android elements
    public Homescreen(AppiumDriver driver) {

        this.driver = driver;
        //Initialize Elements of a Page class without having to use ‘FindElement‘ or ‘FindElements‘
        PageFactory.initElements(new AppiumFieldDecorator(this.driver),this);
    }

    public Homescreen verifyHome(String email) {

        WaitUntilElementIsVisible(helloEmail);
        String txt = helloEmail.getText();
        Assert.assertEquals(txt, email);
        return new Homescreen(driver);
    }
}
