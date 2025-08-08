package com.bike_rental_app.service;

import java.util.List;
import java.util.Optional;

import com.bike_rental_app.model.City;

public interface CityService {
    List<City> findAll();
    Optional<City> findById(Long id);
    City save(City city);
    void deleteById(Long id);
}
