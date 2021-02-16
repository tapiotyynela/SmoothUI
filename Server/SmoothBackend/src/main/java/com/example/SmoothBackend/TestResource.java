package com.example.SmoothBackend;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestResource {
    @Autowired
    private TestService testManagementService;

    @GetMapping("/instructors/{name}/tests")
    public List<TestClass> getAllTests(@PathVariable String name) {
        return testManagementService.findAll();
    }
}