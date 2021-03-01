package com.example.SmoothBackend.repository;

import com.example.SmoothBackend.model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository<Game, String> {

}