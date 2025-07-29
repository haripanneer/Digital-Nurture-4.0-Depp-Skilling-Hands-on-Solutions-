public class FinancialForecast {

    public static double calculateFutureValue(double presentValue, double rate, int periods) {
        if (periods == 0) {
            return presentValue;
        }

        return calculateFutureValue(presentValue, rate, periods - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double presentValue = 1000.0;  
        double rate = 0.05;           
        int periods = 5;             
        double futureValue = calculateFutureValue(presentValue, rate, periods);
        System.out.println("Future Value after " + periods + " periods: $" + futureValue);
    }
}
