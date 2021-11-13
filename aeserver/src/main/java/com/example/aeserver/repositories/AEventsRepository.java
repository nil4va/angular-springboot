package com.example.aeserver.repositories;

import com.example.aeserver.models.AEvent;

import java.util.List;

/**
 * @author Nilava Kazal [studentennummer: 500847707] 13/11/2021 21:49
 */
public interface AEventsRepository {
    public List<AEvent> findAll();
}
