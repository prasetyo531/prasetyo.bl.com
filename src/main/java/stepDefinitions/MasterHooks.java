package stepDefinitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utils.AppiumServer;
import utils.DriverFactory;

import java.io.IOException;

public class MasterHooks extends DriverFactory {

    @Before
    public void setUp() throws IOException {

        System.out.println("setUp");
        driver = getDriver();

        System.out.println("driver before : "+driver);
    }

    @After
    public void tearDownScreenshootFailure(Scenario scenario) throws IOException {
        if (scenario.isFailed() && driver !=null) {
            scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
            try {
                driver.closeApp();
                driver.resetApp();
                System.out.println("need reset android app");
                AppiumServer.stop();
            } catch (IOException e) {
                e.printStackTrace();
            }
        } if (driver != null) {
            AppiumServer.stop();
            System.out.println("end of test");
        }
    }
}
