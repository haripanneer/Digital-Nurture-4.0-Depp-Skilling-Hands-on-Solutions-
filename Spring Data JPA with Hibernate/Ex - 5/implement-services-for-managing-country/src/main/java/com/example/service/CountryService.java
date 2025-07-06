package com.example.service;

import com.example.model.Country;
import com.example.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public Country findByCode(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    @Transactional
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    @Transactional
    public Country updateCountry(String code, Country updatedCountry) {
        Country existing = countryRepository.findById(code).orElse(null);
        if (existing != null) {
            existing.setCoName(updatedCountry.getCoName());
            return countryRepository.save(existing);
        }
        return null;
    }

    @Transactional
    public boolean deleteCountry(String code) {
        if (countryRepository.existsById(code)) {
            countryRepository.deleteById(code);
            return true;
        }
        return false;
    }

    public List<Country> findByPartialName(String partialName) {
        return countryRepository.findByCoNameContainingIgnoreCase(partialName);
    }
}