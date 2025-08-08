package com.bike_rental_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bike_rental_app.model.Userprofile;

@Repository
public interface UserprofileRepository extends JpaRepository<Userprofile, Long> {
    // Custom query methods if needed
}
