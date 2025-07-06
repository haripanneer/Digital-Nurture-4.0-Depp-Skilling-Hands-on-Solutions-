import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.spring-learn.CountryService;


@SpringBootApplication
public class CountryApplication{

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(CountryApplication.class, args);
        countryService = context.getBean(CountryService.class);

        try {
            getCountryByCodeTest();
        } catch (CountryNotFoundException e) {
            LOGGER.error("Exception: ", e);
        }
    }

    private static void getCountryByCodeTest() throws CountryNotFoundException {
        LOGGER.info("Start");
        Country country = countryService.findCountryByCode("IN");
        LOGGER.debug("Country: {}", country);
        LOGGER.info("End");
    }
}

