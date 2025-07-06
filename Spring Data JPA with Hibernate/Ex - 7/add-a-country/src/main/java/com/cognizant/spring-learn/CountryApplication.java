package com.cognizant.spring-learn;

import com.cognizant.spring-learn.model.Country;
import com.cognizant.spring-learn.service.CountryService;
import com.cognizant.spring-learn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class CountryApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(CountryApplication.class, args);
        countryService = context.getBean(CountryService.class);

        try {
            getCountryByCodeTest();
            testAddCountry(); // Test adding a new country
        } catch (CountryNotFoundException e) {
            LOGGER.error("Exception: {}", e.getMessage());
        }
    }

    private static void getCountryByCodeTest() throws CountryNotFoundException {
        LOGGER.info("Start");
        Country country = countryService.findCountryByCode("IN");
        LOGGER.debug("Country: {}", country);
        LOGGER.info("End");
    }

    private static void testAddCountry() throws CountryNotFoundException {
        LOGGER.info("Start Add Country Test");

        Country newCountry = new Country();
        newCountry.setCode("AU");
        newCountry.setName("Australia");

        countryService.addCountry(newCountry);

        Country retrieved = countryService.findCountryByCode("AU");
        LOGGER.debug("Added Country: {}", retrieved);

        LOGGER.info("End Add Country Test");
    }
}
