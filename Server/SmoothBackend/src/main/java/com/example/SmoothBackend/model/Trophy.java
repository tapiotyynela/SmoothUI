package com.example.SmoothBackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Trophy")
public class Trophy {

    @Id
    private String id;
    private String trophyName;
    private String trophyDescription;
    private String rarity;
    private String gameId;

    public Trophy() {
    }

    public Trophy(String trophyName, String trophyDescription, String rarity, String gameId) {
        this.trophyName = trophyName;
        this.trophyDescription = trophyDescription;
        this.rarity = rarity;
        this.gameId = gameId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTrophyName() {
        return trophyName;
    }

    public void setTrophyName(String trophyName) {
        this.trophyName = trophyName;
    }

    public String getTrophyDescription() {
        return trophyDescription;
    }

    public void setTrophyDescription(String trophyDescription) {
        this.trophyDescription = trophyDescription;
    }

    public String getRarity() {
        return rarity;
    }

    public void setRarity(String rarity) {
        this.rarity = rarity;
    }

    public String getGameId() {
        return gameId;
    }

    public void setGameId(String gameId) {
        this.gameId = gameId;
    }

    @Override
    public String toString() {
        return "Trophy [gameId=" + gameId + ", id=" + id + ", rarity=" + rarity + ", trophyDescription="
                + trophyDescription + ", trophyName=" + trophyName + "]";
    }

}