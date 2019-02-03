package com.billboard.demo.dto;

import lombok.Data;

import java.util.Date;

@Data
public class SearchResultDto {
    private Long ownerId;
    private Long adSourceId;
    private String address;
    private Double dailyPrice;
    private String name;
    private Date startDay;
    private Date endDay;
}
