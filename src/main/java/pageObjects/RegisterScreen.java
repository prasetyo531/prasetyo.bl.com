package pageObjects;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class RegisterScreen extends ActionBase{

    @AndroidFindBy(id="com.loginmodule.learning:id/textInputEditTextName")
    public MobileElement nameField;

    @AndroidFindBy(id="com.loginmodule.learning:id/textInputEditTextEmail")
    public MobileElement emailField;

    @AndroidFindBy(id="com.loginmodule.learning:id/textInputEditTextPassword")
    public MobileElement passwordField;

    @AndroidFindBy(id="com.loginmodule.learning:id/textInputEditTextConfirmPassword")
    public MobileElement confirmPasswordField;

    @AndroidFindBy(id="com.loginmodule.learning:id/appCompatButtonRegister")
    public MobileElement registerField;

    @AndroidFindBy(id="com.loginmodule.learning:id/snackbar_text")
    public MobileElement snackBarRegister;

    @AndroidFindBy(id="com.loginmodule.learning:id/appCompatTextViewLoginLink")
    public MobileElement loginLinkText;

    // This is a constructor, as every page need a base driver to find android elements
    public RegisterScreen(AppiumDriver driver) {

        this.driver = driver;
        //Initialize Elements of a Page class without having to use ‘FindElement‘ or ‘FindElements‘
        PageFactory.initElements(new AppiumFieldDecorator(this.driver),this);
    }

    public RegisterScreen assertTextRegisSuccess(String text){

        String txtWarning = snackBarRegister.getText();
        Assert.assertEquals(txtWarning, text);
        return new RegisterScreen(driver);
    }
}
