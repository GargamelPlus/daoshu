package com.leigq;

/**
 *  WebServer客户端测试
 * <p>
 * 创建人：asus <br>
 * 创建时间：2019-01-14 14:49 <br>
 * <p>
 * 修改人： <br>
 * 修改时间： <br>
 * 修改备注： <br>
 * </p>
 */
public class ClientTest {

    public static void main(String[] args) {
        WeatherServiceService factory = new WeatherServiceService();
        WeatherService servicePort = factory.getWeatherServicePort();
        String weather = servicePort.getWeatherByCityname("深圳");
        System.out.println(weather);
    }

}
