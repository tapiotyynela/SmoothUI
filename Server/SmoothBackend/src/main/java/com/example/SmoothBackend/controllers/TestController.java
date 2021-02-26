package com.example.SmoothBackend.controllers;

import java.util.List;

import com.example.SmoothBackend.model.TestClass;
import com.example.SmoothBackend.repository.TestRepository;

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
public class TestController {

    private final TestRepository repository;

    TestController(TestRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/tests")
    public ResponseEntity<TestClass> createTestClass(@RequestBody TestClass testClass) {
       try {
           TestClass _testClass = repository.save(new TestClass(testClass.getName(), testClass.getDescription()));
           return new ResponseEntity<>(_testClass, HttpStatus.CREATED);
       } catch (Exception e) {
           return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

    @GetMapping("/alltests")
    public ResponseEntity<List<TestClass>> getTests() {
        try {
            List<TestClass> tests = repository.findAll();
            return new ResponseEntity<>(tests, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}