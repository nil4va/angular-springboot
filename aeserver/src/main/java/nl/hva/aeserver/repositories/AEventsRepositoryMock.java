package nl.hva.aeserver.repositories;

import nl.hva.aeserver.models.AEvent;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Nilava Kazal [studentennummer: 500847707] 13/11/2021 21:50
 */
@Repository
public class AEventsRepositoryMock implements AEventsRepository {
    public List<AEvent> aEvents = new ArrayList<>();

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
        for (AEvent aEvent : aEvents) {
            if (aEvent.getId() == id) {
                return aEvent;
            }
        }
        return null;
    }

    @Override
    public AEvent save(AEvent aEvent) {
        if (aEvent.getId() == 0) {
            aEvent.setId(AEvent.beginId++);
        }
        aEvents.add(aEvent);

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
