package com.example.SmoothBackend.controllers;

import java.util.List;

import com.example.SmoothBackend.model.Trophy;
import com.example.SmoothBackend.repository.TrophyRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @PostMapping("/newTrophy")
    public ResponseEntity<Trophy> createTrophy(@RequestBody Trophy trophy) {
        try {
            Trophy _Trophy = repository.save(new Trophy(trophy.getTrophyName(), trophy.getTrophyDescription(),
                    trophy.getRarity(), trophy.getGameId()));
            return new ResponseEntity<>(_Trophy, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getTrophies")
    public ResponseEntity<List<Trophy>> getAllTrophys() {
        try {
            List<Trophy> _Trophy = repository.findAll();
            return new ResponseEntity<>(_Trophy, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(path = "/deleteTrophy/{id}")
    public ResponseEntity<Trophy> deleteTrophy(@PathVariable("id") String id) {
        try {
            repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateTrophy/{id}")
    public ResponseEntity<Trophy> updateTrophy(@PathVariable("id") String id, @RequestBody Trophy trophy) {
        try {
            if (repository.existsById(id)) {
                repository.save(trophy);
                return new ResponseEntity<>(HttpStatus.OK);
            }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}