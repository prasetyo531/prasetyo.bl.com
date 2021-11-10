package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class) //this annotations tells junit run test
@CucumberOptions(
        features = {"src/test/java/feature"},
        glue = {"stepDefinitions"},
        monochrome = true,
        tags = {"@Register"},
        plugin =  {"pretty","html:target/test-output/cucumber", //report 1, index html
                "json:target/test-output/cucumber/cucumber.json",  //report 2
                "com.cucumber.listener.ExtentCucumberFormatter:test-output/cucumber/report.html",  //report 3
                "rerun:target/test-output/cucumber/rerun.txt",
                "usage:target/test-output/cucumber/cucumber-usage.json"}
)

public class RegisterTestAndroid extends AbstractTestNGCucumberTests {
}
