package com.bike_rental_app.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bike_rental_app.model.RentalRecord;
import com.bike_rental_app.repository.RentalRecordRepository;

@Service
public class RentalRecordServiceImpl implements RentalRecordService {

    @Autowired
    private RentalRecordRepository rentalRecordRepository;

    @Override
    public List<RentalRecord> findAll() {
        return rentalRecordRepository.findAll();
    }

    @Override
    public Optional<RentalRecord> findById(Long id) {
        return rentalRecordRepository.findById(id);
    }

    
    @Override
    public RentalRecord save(RentalRecord rentalrecord) {
    	rentalrecord.setPaymentConfirmation(true);
        return rentalRecordRepository.save(rentalrecord);
    }

    @Override
    public void deleteById(Long id) {
        rentalRecordRepository.deleteById(id);
    }
}
