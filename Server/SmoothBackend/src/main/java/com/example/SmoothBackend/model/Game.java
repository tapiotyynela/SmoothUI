package com.example.SmoothBackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Game")
public class Game {
    
    @Id
    private String id;
    private String gameName;
    private String description;
    private String trophyId;

    public Game() {
    }

    public Game(String gameName, String description, String trophyId) {
        this.gameName = gameName;
        this.description = description;
        this.trophyId = trophyId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTrophyId() {
        return trophyId;
    }

    public void setTrophyId(String trophyId) {
        this.trophyId = trophyId;
    }

    @Override
    public String toString() {
        return "Game [description=" + description + ", id=" + id + ", gameName=" + gameName + ", trophyId=" + trophyId + "]";
    }

}