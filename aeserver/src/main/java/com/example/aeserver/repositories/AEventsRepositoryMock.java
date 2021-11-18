package com.example.aeserver.repositories;

import com.example.aeserver.models.AEvent;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Nilava Kazal [studentennummer: 500847707] 13/11/2021 21:50
 */
@Repository
public class AEventsRepositoryMock implements AEventsRepository {
    public List<AEvent> aEvents;

    public AEventsRepositoryMock() {
        aEvents.add(AEvent.createRandomAEvent());
        aEvents.add(AEvent.createRandomAEvent());
        aEvents.add(AEvent.createRandomAEvent());
        aEvents.add(AEvent.createRandomAEvent());
        aEvents.add(AEvent.createRandomAEvent());
    }

    @Override
    public List<AEvent> findAll() {
        return aEvents;
    }

    @Override
    public AEvent findByID(long id) {
        for (int i = 0; i < aEvents.size(); i++) {
            if (aEvents.get(i).getId() == id) {
                return aEvents.get(i);
            }
        }
        return null;
    }

    @Override
    public AEvent save(AEvent aEvent) {
        if(aEvent.getId() == 0) {
            aEvent.setId(AEvent.beginId++);
            aEvents.add(aEvent);
        } else {
            aEvents.add(aEvent);
        }

        return null;
    }

    @Override
    public boolean deleteByID(long id) {
        for (int i = 0; i < aEvents.size(); i++) {
            if (aEvents.get(i).getId() == id) {
                aEvents.remove(aEvents.get(i).getId());
                return true;
            }
        }
        return false;
    }
}
