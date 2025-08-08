package com.bike_rental_app.service;


import java.util.List;
import java.util.Optional;

import com.bike_rental_app.model.RentalRecord;

public interface RentalRecordService {
    List<RentalRecord> findAll();
    Optional<RentalRecord> findById(Long id);
    RentalRecord save(RentalRecord rentalrecord);
    void deleteById(Long id);
}
