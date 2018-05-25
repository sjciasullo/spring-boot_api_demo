package com.example.springapi.models;

import javax.persistence.*;

@Entity
@Table(name = "USERS")
public class User {

    @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_NAME")
    private String userName;

    @Column(name = "TAG_LINE")
    private String tagLine;

    public User() {}

    public Long getId() {
        return id;
    }

    public String getUserName(){
        return userName;
    }

    public String getTagLine(){
        return tagLine;
    }

    public void setId(Long id){
        this.id = id;
    }

    public void setUserName(String userName){
        this.userName = userName;
    }

    public void setTagLine(String tagLine){
        this.tagLine = tagLine;
    }
}