package com.billboard.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class TradeOrder {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ad")
    private AdSource ad;

    @ManyToOne
    @JoinColumn(name = "leaser")
    private Leaser leaser;

    @Basic
    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Basic
    @Temporal(TemporalType.DATE)
    private Date endDate;

    @Column
    private Double totalPrice;


}
