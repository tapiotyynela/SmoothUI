package com.example.SmoothBackend.repository;

import com.example.SmoothBackend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    
}