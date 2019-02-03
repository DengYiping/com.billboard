package com.billboard.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class AvailablePeriod {
    @Id
    @GeneratedValue
    private Long id;

    @Basic
    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Basic
    @Temporal(TemporalType.DATE)
    private Date endDate;

    @ManyToOne
    @JoinColumn(name = "ad_source")
    @JsonIgnore
    private AdSource adSource;

}
