public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First Message");
        logger2.log("Second Message");

        if (logger1 == logger2) {
            System.out.println("One logger instance exists");
        } else {
            System.out.println("Different logger instance exists");
        }
    }
}