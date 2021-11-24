package nl.hva.aeserver.models;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import org.apache.tomcat.util.json.JSONParser;

import java.io.Serializable;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

/**
 * @author Nilava Kazal [studentennummer: 500847707] 07/11/2021 13:55
 */
@JsonFilter("AEventFilter")
public class AEvent implements Serializable {

    enum AEventStatus {
        DRAFT,
        PUBLISHED,
        CANCELED
    }

    @JsonView
    private long id;
    @JsonIgnore
    public static long beginId = 19999;
    @JsonView
    private String title;
    @JsonIgnore
    private String description;
    @JsonIgnore
    private Date start;
    @JsonIgnore
    private Date end;
    @JsonView
    private AEventStatus status;
    @JsonIgnore
    private boolean isTicketed;
    @JsonIgnore
    private double participationFee;
    @JsonIgnore
    private int maxParticipants;

    protected AEvent() {

    }

    public AEvent(long id, String title, AEventStatus status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }

    public AEvent(
            long id,
            String title,
            String description,
            Date start,
            Date end,
            AEventStatus status,
            boolean isTicketed,
            double participationFee,
            int maxParticipants
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.start = start;
        this.end = end;
        this.status = status;
        this.isTicketed = isTicketed;
        this.participationFee = participationFee;
        this.maxParticipants = maxParticipants;
    }

    public static Date randomDate() {
        return new Date(ThreadLocalRandom.current().nextInt() * 1000L);
    }

    public static boolean randomIsTicketed() {
        return Math.random() < 0.5;
    }

    public static double randomFee() {
        if (randomIsTicketed()) {
            return (Math.random() * (30 - 1 + 1) + 1);
        } else return 00.0;
    }

    public static AEvent createRandomAEvent() {
        String title = "Amazing event";
        String description = "just come";
        Date start = randomDate();
        Date end = randomDate();
        AEventStatus status = AEventStatus.CANCELED;
        boolean isTicketed = true;
        double participationFee = randomFee();
        int maxParticipants = 40;

        return new AEvent(AEvent.beginId++, title, description, start, end, status, isTicketed, participationFee, maxParticipants);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public static long getBeginId() {
        return beginId;
    }

    public static void setBeginId(long beginId) {
        AEvent.beginId = beginId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public AEventStatus getStatus() {
        return status;
    }

    public void setStatus(AEventStatus status) {
        this.status = status;
    }

    public boolean isTicketed() {
        return isTicketed;
    }

    public void setTicketed(boolean ticketed) {
        isTicketed = ticketed;
    }

    public double getParticipationFee() {
        return participationFee;
    }

    public void setParticipationFee(double participationFee) {
        this.participationFee = participationFee;
    }

    public int getMaxParticipants() {
        return maxParticipants;
    }

    public void setMaxParticipants(int maxParticipants) {
        this.maxParticipants = maxParticipants;
    }
}
