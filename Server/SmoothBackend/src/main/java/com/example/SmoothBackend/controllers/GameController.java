package com.example.SmoothBackend.controllers;

import java.util.List;

import com.example.SmoothBackend.model.Game;
import com.example.SmoothBackend.repository.GameRepository;

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
public class GameController {

    private final GameRepository repository;

    GameController(GameRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/newGame")
    public ResponseEntity<Game> createGame(@RequestBody Game game) {
        try {
            Game _Game = repository.save(new Game(game.getGameName(), game.getDescription(), game.getTrophyId()));
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

    @DeleteMapping(path = "/deleteGame/{id}")
    public ResponseEntity<Game> deleteGame(@PathVariable("id") String id) {
        try {
            repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @PutMapping("/updateGame/{id}")
    // public ResponseEntity<Game> updateGame(@PathVariable("id") String id,
    // @RequestBody Game game) {
    // try {
    // if (repository.exists(example) {
    // // game.setGameName(game.getGameName() + "HAHAA");
    // // repository.save();
    // System.out.println("Olen idiootti");
    // return new ResponseEntity<>(HttpStatus.OK);
    // }
    // return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    // } catch (Exception e) {
    // return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    // }
    // }

    // @PutMapping(path = "/{username}")
    // public User update(@PathVariable("username") String username, @RequestBody
    // User user) throws BadHttpRequest {
    // if (repository.exists(username)) {
    // user.setUsername(username);
    // return repository.save(user);
    // } else {
    // throw new BadHttpRequest();
    // }
    // }

}