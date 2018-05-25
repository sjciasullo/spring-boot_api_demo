package com.example.springapi.controllers;

import com.example.springapi.models.User;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UsersController {
    @GetMapping("/users")
    public List<User> findAllUsers() {
        return new ArrayList<User>();
    }
}