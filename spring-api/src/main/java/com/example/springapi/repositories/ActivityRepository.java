package com.example.springapi.repositories;

import com.example.springapi.models.Activity;
import org.springframework.data.repository.CrudRepository;

public interface ActivityRepository extends CrudRepository<Activity, Long> {

}
