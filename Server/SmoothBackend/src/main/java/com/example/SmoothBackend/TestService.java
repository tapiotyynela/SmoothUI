package com.example.SmoothBackend;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    private static List<TestClass> tests = new ArrayList<>();
    private static long idCounter = 0;

    static {
        tests.add(new TestClass(++idCounter, "testdata", "Tämä teksti tulee Smooth Backendistä"));
        tests.add(new TestClass(++idCounter, "testdata", "Tämä teksti tulee myös Smooth Backendistä"));
        tests.add(new TestClass(++idCounter, "testdata", "Tämä teksti varsinkin tulee Smooth Backendistä"));
    }

    public List<TestClass> findAll() {
        return tests;
    }
}