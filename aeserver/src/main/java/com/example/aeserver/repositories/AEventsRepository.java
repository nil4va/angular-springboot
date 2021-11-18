package com.example.aeserver.repositories;

import com.example.aeserver.models.AEvent;

import java.util.List;

/**
 * @author Nilava Kazal [studentennummer: 500847707] 13/11/2021 21:49
 */
public interface AEventsRepository {
    List<AEvent> findAll();
    AEvent findByID(long id);
    AEvent save(AEvent aEvent);
    boolean deleteByID(long id);
}
