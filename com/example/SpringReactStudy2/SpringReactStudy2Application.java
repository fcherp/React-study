package com.example.SpringReactStudy2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collections;

@SpringBootApplication
public class SpringReactStudy2Application {

	public static void main(String[] args) {

		var app = new SpringApplication(SpringReactStudy2Application.class);
		app.setDefaultProperties(Collections.singletonMap("spring.profiles.active","dev"));
		var ctx= app.run( args);
	}

}
