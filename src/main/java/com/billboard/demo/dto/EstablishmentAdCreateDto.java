package com.billboard.demo.dto;

import com.billboard.demo.model.AvailablePeriod;
import lombok.Data;

import java.util.List;

@Data
public class EstablishmentAdCreateDto {
    private Long ownerId;
    private String address;
    private List<AvailablePeriod> availablities;
    private Double dailyPrice;
    private String name;
}
