package com.example.SmoothBackend.repository;

import com.example.SmoothBackend.model.TestClass;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestRepository extends MongoRepository<TestClass, String> {

}