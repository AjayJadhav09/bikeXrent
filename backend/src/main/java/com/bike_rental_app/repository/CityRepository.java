package com.bike_rental_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bike_rental_app.model.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
    // Custom query methods if needed
}
