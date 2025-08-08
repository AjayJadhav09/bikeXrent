package com.bike_rental_app.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bike_rental_app.model.Userprofile;
import com.bike_rental_app.repository.UserprofileRepository;

@Service
public class UserprofileServiceImpl implements UserprofileService {

    @Autowired
    private UserprofileRepository userprofileRepository;

    @Override
    public List<Userprofile> findAll() {
        return userprofileRepository.findAll();
    }

    @Override
    public Optional<Userprofile> findById(Long id) {
        return userprofileRepository.findById(id);
    }

    @Override
    public Userprofile save(Userprofile userprofile) {
        return userprofileRepository.save(userprofile);
    }

    @Override
    public void deleteById(Long id) {
        userprofileRepository.deleteById(id);
    }
}