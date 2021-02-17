package com.example.SmoothBackend;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import java.io.Console;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

import com.mongodb.client.MongoClients;


@SpringBootApplication
public class SmoothBackendApplication {

	private static final Log log = LogFactory.getLog(SmoothBackendApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(SmoothBackendApplication.class, args);
		MongoOperations mongoOps = new MongoTemplate(MongoClients.create(), "database");
		mongoOps.insert(new TestClass("Tietokantatesti", "Sama kuin nimi"));
		log.info(mongoOps.findOne(new Query(where("name").is("Tietokantatesti")), TestClass.class));
	}
}
