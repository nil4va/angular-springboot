package com.example.aeserver.rest;

import com.example.aeserver.models.AEvent;
import com.example.aeserver.repositories.AEventsRepositoryMock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Nilava Kazal [studentennummer: 500847707] 07/11/2021 12:57
 */

@RestController
public class AEventsController {

    @Autowired
    AEventsRepositoryMock repository;

    @GetMapping("/AEvents")
    public List<AEvent> getAllAEvents() {
        return repository.findAll();
    }
}
