package pageObjects;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

public class LoginScreen extends ActionBase{

    @AndroidFindBy(id="com.loginmodule.learning:id/textInputEditTextEmail")
    public MobileElement emailField;

    @AndroidFindBy(id="com.loginmodule.learning:id/textInputEditTextPassword")
    public MobileElement passwordField;

    @AndroidFindBy(id="com.loginmodule.learning:id/appCompatButtonLogin")
    public MobileElement loginBtn;

    @AndroidFindBy(id="com.loginmodule.learning:id/textViewLinkRegister")
    public MobileElement registerLinkText;

    // This is a constructor, as every page need a base driver to find android elements
    public LoginScreen(AppiumDriver driver) {

        this.driver = driver;
        //Initialize Elements of a Page class without having to use ‘FindElement‘ or ‘FindElements‘
        PageFactory.initElements(new AppiumFieldDecorator(this.driver),this);
    }
}
