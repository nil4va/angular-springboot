package nl.hva.aeserver.rest;

import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import nl.hva.aeserver.PreConditionFailed;
import nl.hva.aeserver.UserNotFoundException;
import nl.hva.aeserver.models.AEvent;
import nl.hva.aeserver.repositories.AEventsRepositoryMock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @GetMapping(path = "/AEvents/{id}")
    public AEvent getAEvent(@PathVariable int id) {
        AEvent aEvent = repository.findByID(id);
        if (aEvent == null) {
            throw new UserNotFoundException("the following id is not found: " + id);
        }
        return aEvent;
    }

    @PostMapping(path = "/AEvents")
    public ResponseEntity<AEvent> postAEvent(@RequestBody AEvent aEvent) {
        AEvent aEventToPost = repository.save(aEvent);

        URI location =
                ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(aEventToPost.getId())
                        .toUri();

        return ResponseEntity.created(location).build();
    }

    @PutMapping(path = "/AEvents/{id}")
    public ResponseEntity<AEvent> putAEvent(@PathVariable int id, @RequestBody AEvent aEventDetails) throws PreConditionFailed {
        AEvent aEvent = repository.findByID(id);

        aEvent.setId(aEventDetails.getId());
        aEvent.setDescription(aEventDetails.getDescription());
        aEvent.setEnd(aEventDetails.getEnd());
        aEvent.setStart(aEventDetails.getStart());
        aEvent.setMaxParticipants(aEventDetails.getMaxParticipants());
        aEvent.setTicketed(aEventDetails.isTicketed());
        aEvent.setParticipationFee(aEventDetails.getParticipationFee());
        aEvent.setTitle(aEventDetails.getTitle());
        aEvent.setStatus(aEventDetails.getStatus());

        if (id != aEventDetails.getId()) {
            throw new PreConditionFailed("the following id " + id + " does not match parameter " + aEventDetails.getId());
        }

        AEvent updatedAEvent = repository.save(aEvent);
        URI location =
                ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(aEvent.getId())
                        .toUri();

        return ResponseEntity.created(location).build();
    }

    @DeleteMapping(path = "/AEvents/{id}")
    public ResponseEntity<Integer> deleteAEvent(@PathVariable int id) {

        boolean deletedAEvent = repository.deleteByID(id);

        if (!deletedAEvent) {
            throw new UserNotFoundException("the following id is not found: " + id);
        }

        return ResponseEntity.ok(id);
    }

    @RequestMapping("/AEvents/summary")
    public MappingJacksonValue getAEventSummary() {
        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("id", "title", "status");
        FilterProvider filters = new SimpleFilterProvider().addFilter("AEventFilter", filter);
        MappingJacksonValue mapping = new MappingJacksonValue(getAllAEvents());
        mapping.setFilters(filters);
        return mapping;
    }
}
