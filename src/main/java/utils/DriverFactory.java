package utils;

import io.appium.java_client.AppiumDriver;
import pageObjects.Homescreen;
import pageObjects.LoginScreen;
import pageObjects.RegisterScreen;

import java.io.IOException;

public class DriverFactory {

    public static AppiumDriver driver;

    public static LoginScreen loginScreen;
    public static RegisterScreen registerScreen;
    public static Homescreen homescreen;

    public AppiumDriver getDriver() throws IOException {
        try {
            AppiumServer.stop();
            AppiumServer.start();

            CommonUtils.loadAndroidConfigProp("android.properties");
            CommonUtils.setAndroidCapabilities();
            driver = CommonUtils.getAndroidDriver();
        } catch (Exception e) {
            System.out.println("Unable to load apps: " + e.getMessage());
        } finally {
            // This is to Instantiate class by creating object
            loginScreen = new LoginScreen(driver);
            registerScreen = new RegisterScreen(driver);
            homescreen = new Homescreen(driver);
        }
        return driver;
    }
}
