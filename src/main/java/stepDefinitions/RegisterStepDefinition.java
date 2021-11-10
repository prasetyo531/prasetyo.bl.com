package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import utils.DriverFactory;

public class RegisterStepDefinition extends DriverFactory {

    @Given("^User navigate to register screen$")
    public void user_navigate_to_register_screen() {
        loginScreen.tapRegisterLinkText();
    }

    @When("^User input \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_input_something_something_something_and_something(String name, String email, String password, String confirmpassword) {
       registerScreen.inputName(name);
       registerScreen.inputEmail(email);
       registerScreen.inputPassword(password);
       registerScreen.inputConfirmPassword(confirmpassword);
    }

    @And("^User click register button$")
    public void user_click_register_button() {
        registerScreen.tapRegisterBtn();
    }



}
