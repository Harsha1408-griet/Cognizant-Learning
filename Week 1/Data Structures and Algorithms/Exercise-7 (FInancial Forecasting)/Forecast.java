public class Main {

    public static double project(double current, double[] growthRates, int year) {
        if (year == growthRates.length) {
            return current;
        }
        double next = current * (1 + growthRates[year]);
        return project(next, growthRates, year + 1);
    }

    public static void main(String[] args) {
        double presentValue = 100000;
        double[] growth = {0.08, 0.06, 0.07, 0.05};
        double future = project(presentValue, growth, 0);
        System.out.printf("Projected value after %d years = ₹%.2f%n", growth.length, future);
    }
}
