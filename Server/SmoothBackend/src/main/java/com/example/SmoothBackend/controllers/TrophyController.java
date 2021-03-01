package com.example.SmoothBackend.controllers;

import java.util.List;

import com.example.SmoothBackend.model.Trophy;
import com.example.SmoothBackend.repository.TrophyRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class TrophyController {

    private final TrophyRepository repository;

    TrophyController(TrophyRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/trophies")
    public ResponseEntity<Trophy> createTrophy(@RequestBody Trophy Trophy) {
       try {
        Trophy _Trophy = repository.save(new Trophy(Trophy.getId(), Trophy.getTrophyName(), Trophy.getTrophyDescription(), Trophy.getRarity(), Trophy.getGameId()));
           return new ResponseEntity<>(_Trophy, HttpStatus.CREATED);
       } catch (Exception e) {
           return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }
}