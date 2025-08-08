package com.bike_rental_app.controller;


import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bike_rental_app.model.Bike;
import com.bike_rental_app.service.BikeService;

import io.jsonwebtoken.io.IOException;
import jakarta.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/api/bikes")
public class BikeController {

    @Autowired
    private BikeService bikeService;

    @GetMapping
    public ResponseEntity<List<Bike>> getAllBikes() {
        List<Bike> bikes = bikeService.findAll();
        return ResponseEntity.ok(bikes);	
    }
    
    @RolesAllowed({"ADMIN","SUPERUSER","CUSTOMER"})
    @GetMapping("/{id}")
    public ResponseEntity<Bike> getBikeById(@PathVariable Long id) {
        Optional<Bike> bike = bikeService.findById(id);
        return bike.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

//    @RolesAllowed({"ADMIN","SUPERUSER"})
//    @PostMapping
//    public ResponseEntity<Bike> createBike(@RequestBody Bike bike) {
//        Bike createdBike = bikeService.save(bike);
//        return ResponseEntity.ok(createdBike);
//    }
    

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Bike> createBike(
            @RequestParam("bikeName") String bikeName,
            @RequestParam("bikeNumber") String bikeNumber,
            @RequestParam("bikeDescription") String bikeDescription,
            @RequestParam("perDayRental") BigDecimal perDayRental,
            @RequestParam("isAvailable") boolean isAvailable,
            @RequestParam("bikePhoto") MultipartFile bikePhotoFile
    ) throws java.io.IOException {
        try {
            Bike bike = new Bike();
            bike.setBikeName(bikeName);
            bike.setBikeNumber(bikeNumber);
            bike.setBikeDescription(bikeDescription);
            bike.setPerDayRental(perDayRental);
            bike.setAvailable(isAvailable);
            bike.setBikePhoto(bikePhotoFile.getBytes()); // Convert to byte[]

            Bike saved = bikeService.save(bike);
            return ResponseEntity.ok(saved);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }



    @RolesAllowed({"ADMIN","SUPERUSER"})
    @PutMapping("/{id}")
    public ResponseEntity<Bike> updateBike(@PathVariable Long id, @RequestBody Bike bikeDetails) {
        Optional<Bike> bike = bikeService.findById(id);
        if (bike.isPresent()) {
            bikeDetails.setBikeId(id);
            Bike updatedBike = bikeService.save(bikeDetails);
            return ResponseEntity.ok(updatedBike);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RolesAllowed({"ADMIN","SUPERUSER"})
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBike(@PathVariable Long id) {
        Optional<Bike> bike = bikeService.findById(id);
        if (bike.isPresent()) {
            bikeService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
