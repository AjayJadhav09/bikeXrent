package com.bike_rental_app.service;

import java.util.List;
import java.util.Optional;

import com.bike_rental_app.model.Bike;

public interface BikeService {
    List<Bike> findAll();
    Optional<Bike> findById(Long id);
    Bike save(Bike bike);
    void deleteById(Long id);
}
