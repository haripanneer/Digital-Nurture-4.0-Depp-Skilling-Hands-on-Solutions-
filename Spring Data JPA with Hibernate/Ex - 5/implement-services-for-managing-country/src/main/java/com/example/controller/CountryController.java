package com.example.controller;

import com.example.model.Country;
import com.example.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/{code}")
    public Country getByCode(@PathVariable String code) {
        return countryService.findByCode(code);
    }

    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        return countryService.addCountry(country);
    }

    @PutMapping("/{code}")
    public Country updateCountry(@PathVariable String code, @RequestBody Country country) {
        return countryService.updateCountry(code, country);
    }

    @DeleteMapping("/{code}")
    public boolean deleteCountry(@PathVariable String code) {
        return countryService.deleteCountry(code);
    }

    @GetMapping("/search")
    public List<Country> searchByName(@RequestParam String name) {
        return countryService.findByPartialName(name);
    }
}