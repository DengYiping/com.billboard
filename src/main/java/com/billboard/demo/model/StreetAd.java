package com.billboard.demo.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@PrimaryKeyJoinColumn
@Data
public class StreetAd extends AdSource {
    @Column
    private Double coordinateX;

    @Column
    private Double coordinateY;
}
