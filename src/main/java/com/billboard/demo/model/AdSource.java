package com.billboard.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public class AdSource {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "owner")
    private Owner owner;

    @Column
    @OneToMany(mappedBy = "adSource")
    private List<AvailablePeriod> availabilities;

    @Column
    private Double dailyPrice;


}
