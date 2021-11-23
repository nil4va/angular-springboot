package nl.hva.aeserver.repositories;

import nl.hva.aeserver.models.AEvent;

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
