package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;

public class LoginStepDefinition extends DriverFactory {

    @Given("^User navigate to login screen$")
    public void user_navigate_to_login_screen() {
        loginScreen.verifyLoginScreen();
    }

    @When("^User input \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_input_something_and_something(String email, String password) {
        loginScreen.inputEmail(email);
        loginScreen.inputPassword(password);
    }

    @And("^User click login button$")
    public void user_click_login_button() {
        loginScreen.tapLoginBtn();
    }

    @Then("^Display toast message \"([^\"]*)\" is displayed at bottom$")
    public void display_toast_message_something_is_displayed_at_bottom(String msg) {
        loginScreen.verifyToastLogin(msg);
    }

    @Then("^User will see user own \"([^\"]*)\" on homescreen$")
    public void user_will_see_user_own_something_on_homescreen(String email) {
        homescreen.verifyHome(email);
    }
}
