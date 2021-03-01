package com.example.SmoothBackend.repository;

import com.example.SmoothBackend.model.Trophy;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrophyRepository extends MongoRepository<Trophy, String> {

}