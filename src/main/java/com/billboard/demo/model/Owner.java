package com.billboard.demo.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Owner {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String iban;

    @Column
    private String eMail;


}
