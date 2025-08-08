package com.bike_rental_app.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bike_rental_app.model.Bike;
import com.bike_rental_app.model.RentalRecord;
import com.bike_rental_app.model.User;
import com.bike_rental_app.repository.BikeRepository;
import com.bike_rental_app.repository.UserRepository;
import com.bike_rental_app.service.RentalRecordService;

import jakarta.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/api/rentalrecords")
public class RentalrecordController {

    @Autowired
    private RentalRecordService rentalRecordService;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private BikeRepository bikeRepository;

    @RolesAllowed({"ADMIN","CUSTOMER","OBSERVER","SUPERUSER"})
    @GetMapping
    public ResponseEntity<List<RentalRecord>> getAllRentalrecords() {
    	System.out.println("in service");
        List<RentalRecord> rentalrecords = rentalRecordService.findAll();
        System.out.println(rentalrecords);
        return ResponseEntity.ok(rentalrecords);
    }
    
    @RolesAllowed({"ADMIN","CUSTOMER","SUPERUSER"})
    @GetMapping("/{id}")
    public ResponseEntity<RentalRecord> getRentalrecordById(@PathVariable Long id) {
        Optional<RentalRecord> rentalrecord = rentalRecordService.findById(id);
        return rentalrecord.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

//    @RolesAllowed({"CUSTOMER","SUPERUSER","ADMIN"})
//    @PostMapping
//    public ResponseEntity<RentalRecord> createRentalrecord(@RequestBody RentalRecord rentalrecord) {
//    	RentalRecord createdRentalrecord = rentalRecordService.save(rentalrecord);
//    	System.out.println("Rental record created");
//        return ResponseEntity.ok(createdRentalrecord);
//    }

    
    @RolesAllowed({"CUSTOMER", "SUPERUSER", "ADMIN"})
    @PostMapping
    public ResponseEntity<RentalRecord> createRentalrecord(@RequestBody RentalRecord rentalrecord) {
        // Fetch full user and bike from DB based on their IDs
    	
    	System.out.println("Received Rental: " + rentalrecord); // Log entire object
       
        System.out.println("User ID: " + rentalrecord.getUser().getUserId()); // Log userId
        
    	System.out.println("USER INFO "+rentalrecord.getUser());
        Long userId = rentalrecord.getUser().getUserId();
        Long bikeId = rentalrecord.getBike().getBikeId();

        User fullUser = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));

        Bike fullBike = bikeRepository.findById(bikeId)
            .orElseThrow(() -> new RuntimeException("Bike not found with ID: " + bikeId));

        rentalrecord.setUser(fullUser);
        rentalrecord.setBike(fullBike);

        RentalRecord createdRentalrecord = rentalRecordService.save(rentalrecord);
        System.out.println("Rental record created");
        
        return ResponseEntity.ok(createdRentalrecord);
    }

    
    @RolesAllowed({"SUPERUSER","CUSTOMER"})
    @PutMapping("/{id}")
    public ResponseEntity<RentalRecord> updateRentalrecord(@PathVariable Long id, @RequestBody RentalRecord rentalrecordDetails) {
        Optional<RentalRecord> rentalrecord = rentalRecordService.findById(id);
        if (rentalrecord.isPresent()) {
            rentalrecordDetails.setRentalRecordId(id);
            RentalRecord updatedRentalrecord = rentalRecordService.save(rentalrecordDetails);
            return ResponseEntity.ok(updatedRentalrecord);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RolesAllowed({"SUPERUSER"})
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRentalrecord(@PathVariable Long id) {
        Optional<RentalRecord> rentalrecord = rentalRecordService.findById(id);
        if (rentalrecord.isPresent()) {
            rentalRecordService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
