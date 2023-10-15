package com.example.restapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost")
@RestController
public class HelloController {

	@GetMapping("/say-hello")
	public String sayHelloWorld() {
		return "Hello World";
	}
	
}
