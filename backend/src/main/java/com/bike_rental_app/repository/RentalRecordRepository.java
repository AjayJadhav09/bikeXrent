package com.bike_rental_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bike_rental_app.model.RentalRecord;

@Repository
public interface RentalRecordRepository extends JpaRepository<RentalRecord, Long> {
    // Custom query methods if needed
}
