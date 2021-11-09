package utils;

import io.appium.java_client.AppiumDriver;
import pageObjects.OnboardingScreen;

import java.io.IOException;

public class DriverFactory {

    public static AppiumDriver driver;

    public static OnboardingScreen onBoardingScreen;

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
            onBoardingScreen = new OnboardingScreen(driver);
        }
        return driver;
    }
}
