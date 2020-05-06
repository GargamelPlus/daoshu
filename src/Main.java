import com.leigq.WeatherService;
import com.leigq.WeatherServiceService;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World!");
        WeatherServiceService factory = new WeatherServiceService();
        WeatherService weatherServicePort = factory.getWeatherServicePort();
        String cityname = weatherServicePort.getWeatherByCityname("重庆");
        System.out.println(cityname);
    }
}
