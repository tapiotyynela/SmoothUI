package com.example.SmoothBackend;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import java.io.Console;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SmoothBackendApplication {

	private static final Log log = LogFactory.getLog(SmoothBackendApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(SmoothBackendApplication.class, args);
		
	}
}
