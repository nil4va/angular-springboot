package com.example.aeserver.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.*;

/**
 *
 *
 * @author Nilava Kazal [studentennummer: 500847707] 07/11/2021 13:55
 */

@Entity(name = "AEvent")
public class AEvent implements Serializable {
    String title = "Amazing event";

    @Column(name = "description")
    String description = "just come";

    @Column(name = "start_date")
    String start;

    @Column(name = "end_date")
    String end;

    @Column(name = "status")
    String status;

    @Column(name = "is_ticketed")
    boolean isTicketed;

    @Column(name = "participation_fee")
    double participationFee;

    @Column(name = "max_participants")
    String maxParticipants;

    int id;
    static int beginId = 19999;

    @Id
    @Column(name = "id")
    static int getNextId = ++AEvent.beginId;

    public AEvent(String title) {
        this.id = getNextId;
        this.title = title;
        this.start = randomDate();
        this.end = randomDate();
        this.description = description;
        this.status = randomStatus();
        this.isTicketed = randomIsTicketed();
        this.participationFee = randomFee();
        this.maxParticipants = randomParticipants();
    }


    public static String randomStatus() {
        List<String> statuses = Arrays.asList("DRAFT", "PUBLISHED", "CANCELED");
        Random rand = new Random();

        return statuses.get(rand.nextInt(statuses.size()));
    }

    public static String randomDate() {
        Random rnd = new Random();
        Date date = new Date(Math.abs(System.currentTimeMillis() - rnd.nextLong()));
        return date.toString();
    }

//    public static int randomDuration() {
//        int start = randomDate();
//        int end = (int) (randomDate() + Math.random() * 10000000);
//
//        return start + (int) Math.round(Math.random() * (end - start));
//    }

    public static boolean randomIsTicketed() {
        return Math.random() < 0.5;
    }

    public static double randomFee() {
        if (randomIsTicketed()) {
            return (Math.random() * (30 - 1 + 1) + 1);
        } else return 00.0;
    }


    public static String randomParticipants() {
        if (randomIsTicketed()) {
            return Math.round(Math.random() * (10 - 1 + 1) + 1) + "00";
        } else return null;
    }

    public static AEvent createRandomAEvent() {
        String title = "Amazing event";
        String description = "just come";

        return new AEvent(title);
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getStart() {
        return start;
    }

    public String getEnd() {
        return end;
    }

    public String getStatus() {
        return status;
    }

    public boolean isTicketed() {
        return isTicketed;
    }

    public double getParticipationFee() {
        return participationFee;
    }

    public String getMaxParticipants() {
        return maxParticipants;
    }

    public int getId() {
        return id;
    }

    public static int getBeginId() {
        return beginId;
    }

    public static int getGetNextId() {
        return getNextId;
    }
}
