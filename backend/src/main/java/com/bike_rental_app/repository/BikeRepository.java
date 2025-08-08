package com.bike_rental_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bike_rental_app.model.Bike;

@Repository
public interface BikeRepository extends JpaRepository<Bike, Long> {
    // Custom query methods if needed
}
