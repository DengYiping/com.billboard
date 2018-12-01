package com.billboard.demo.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String username;

    @Column
    private String passwordHash;

    @ManyToOne
    private Leaser leaser;

    @ManyToOne
    private Owner owner;

    @Column
    private String role;
}
