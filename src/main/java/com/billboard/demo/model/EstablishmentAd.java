package com.billboard.demo.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn
@Data
public class EstablishmentAd extends AdSource {
    @Column
    private String address;

    @Column
    private String establishmentName;

    @Column
    private Double rating;

}
