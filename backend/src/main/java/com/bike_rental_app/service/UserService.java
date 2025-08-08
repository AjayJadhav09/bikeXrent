package com.bike_rental_app.service;


import java.util.List;
import java.util.Optional;

import com.bike_rental_app.model.User;

public interface UserService {
    List<User> findAll();
    Optional<User> findById(Long id);
    User save(User user);
    void deleteById(Long id);
    Optional<User> findByEmailId(String emailId);
}
	