package com.bike_rental_app.service;

import java.util.List;
import java.util.Optional;

import com.bike_rental_app.model.Userprofile;

public interface UserprofileService {
    List<Userprofile> findAll();
    Optional<Userprofile> findById(Long id);
    Userprofile save(Userprofile userprofile);
    void deleteById(Long id);
}
