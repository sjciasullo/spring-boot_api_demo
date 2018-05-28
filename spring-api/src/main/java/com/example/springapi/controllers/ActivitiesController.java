package com.example.springapi.controllers;

import com.example.springapi.models.Activity;
import com.example.springapi.repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ActivitiesController {

    @Autowired
    private ActivityRepository activityRepository;

    @GetMapping("/activities")
    public Iterable<Activity> findAllActivities() {
        return activityRepository.findAll();
    }

    // Is a @GetMapping necessary for a single activity?
    // TODO implement a @GetMapping to get a user's activities

    @DeleteMapping("/activities/{activityId}")
    public HttpStatus deleteUserById(@PathVariable Long activityId) {
        activityRepository.deleteById(activityId);
        return HttpStatus.OK;
    }

    @PostMapping("/activities")
    public Activity createNewActivity(@RequestBody Activity newActivity) {
        return activityRepository.save(newActivity);
    }

    @PatchMapping("/activities/{activityId}")
    public Activity updateActivityById(@PathVariable Long activityId, @RequestBody Activity activityRequest) {
        Activity activityFromDb = activityRepository.findById(activityId).get();
        activityFromDb.setTotalMinutes(activityRequest.getTotalMinutes());
        activityFromDb.setActivityName(activityRequest.getActivityName());
        activityFromDb.setNotes(activityRequest.getNotes());
        return activityRepository.save(activityFromDb);
    }
}
