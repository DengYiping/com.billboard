package com.billboard.demo.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Payment {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String IBAN;

    @Column
    private String creditCard;


}
