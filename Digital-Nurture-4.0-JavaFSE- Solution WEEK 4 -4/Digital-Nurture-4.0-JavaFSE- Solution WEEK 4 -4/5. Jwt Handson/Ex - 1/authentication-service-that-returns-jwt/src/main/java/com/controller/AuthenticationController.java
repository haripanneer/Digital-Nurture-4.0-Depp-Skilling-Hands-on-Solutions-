package com.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import java.util.Base64;
import com.util.JwtUtil;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START - /authenticate");
        LOGGER.debug("Authorization Header: {}", authHeader);

        Map<String, String> response = new HashMap<>();

        try {
            // Strip "Basic " and decode base64
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
            String decodedCredentials = new String(decodedBytes);

            // Split "user:pwd"
            String[] values = decodedCredentials.split(":", 2);
            String username = values[0];
            String password = values[1];

            // Normally: check username & password from DB
            if ("user".equals(username) && "pwd".equals(password)) {
                String token = JwtUtil.generateToken(username);
                response.put("token", token);
            } else {
                response.put("token", "Invalid credentials");
            }

        } catch (Exception e) {
            response.put("token", "Error parsing credentials");
        }

        LOGGER.info("END - /authenticate");
        return response;
    }
}


