package com.example.SmoothBackend.controllers;

import java.util.List;

import com.example.SmoothBackend.model.Game;
import com.example.SmoothBackend.repository.GameRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class GameController {

    private final GameRepository repository;

    GameController(GameRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/newGame")
    public ResponseEntity<Game> createGame(@RequestBody Game Game) {
        try {
            Game _Game = repository.save(new Game(Game.getGameName(), Game.getDescription(), Game.getTrophyId()));
            return new ResponseEntity<>(_Game, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getGames")
    public ResponseEntity<List<Game>> getAllGames() {
        try {
            List<Game> _Game = repository.findAll();
            return new ResponseEntity<>(_Game, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateGames")
    public ResponseEntity<Game> updateGame(@RequestBody Game Game) {
        try {
            Game _Game = repository.save(new Game(Game.getGameName(), Game.getDescription(), Game.getTrophyId()));
            return new ResponseEntity<>(_Game, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteGames")
    public ResponseEntity<Game> deleteGame(@RequestBody Game Game) {
        try {
            Game _Game = repository.save(new Game(Game.getGameName(), Game.getDescription(), Game.getTrophyId()));
            return new ResponseEntity<>(_Game, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}