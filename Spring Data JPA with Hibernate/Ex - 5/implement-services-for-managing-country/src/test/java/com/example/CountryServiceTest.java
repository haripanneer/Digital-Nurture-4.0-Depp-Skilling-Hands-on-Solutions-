package com.example;

import com.example.model.Country;
import com.example.service.CountryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@Import(CountryService.class)
@TestPropertySource(properties = {
    "spring.jpa.hibernate.ddl-auto=create-drop",
    "spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1",
    "spring.jpa.defer-datasource-initialization=false"
})
@Transactional
public class CountryServiceTest {

    @Autowired
    private CountryService countryService;

    @BeforeEach
    public void setup() {
        // Initialize test data
        Country testCountry = new Country("US", "United States");
        countryService.addCountry(testCountry);
    }

    @Test
    public void testFindByCode() {
        Country found = countryService.findByCode("US");
        assertNotNull(found);
        assertEquals("United States", found.getCoName());
    }

    // Add other test methods...
}