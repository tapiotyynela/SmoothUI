package com.example.SmoothBackend.services;

import java.util.ArrayList;
import java.util.List;

import com.example.SmoothBackend.model.TestClass;
import com.example.SmoothBackend.repository.TestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    @Autowired
    private TestRepository repository;
    public TestClass addTest() {
        return repository.save(new TestClass("TESTI", "TESTINEN"));
    }

}