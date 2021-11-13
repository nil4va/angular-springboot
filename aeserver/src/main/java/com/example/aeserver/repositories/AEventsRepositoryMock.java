package com.example.aeserver.repositories;

import com.example.aeserver.models.AEvent;

/**
 * @author Nilava Kazal [studentennummer: 500847707] 13/11/2021 21:50
 */
public class AEventsRepositoryMock {
    public AEventsRepositoryMock() {
        AEvent[] aEvents = {new AEvent("cake"), new AEvent("cake1"), new AEvent("cake2"), new AEvent("cake3"),
                new AEvent("cake4"), new AEvent("cake5"), new AEvent("cake6")};
    }
}
