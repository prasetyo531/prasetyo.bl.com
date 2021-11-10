package utils;

import java.io.IOException;

public class AppiumServer {

    private static Process process;

    //Starting the Appium Server
    public static void start() throws IOException, InterruptedException {

        Runtime runtime = Runtime.getRuntime();
        process = runtime.exec("appium -a 127.0.0.1 -p 4725");
        //process = runtime.exec(STARTSERVER);

        Thread.sleep(2500);
        if (process != null) {
            System.out.println("Appium server started");
        }
    }

    //Stopping the Appium Server
    public static void stop() throws IOException, InterruptedException {
        if (process != null) {
            process.destroy();
            Thread.sleep(2500);
        }
        System.out.println("Appium server stopped");
    }
}
