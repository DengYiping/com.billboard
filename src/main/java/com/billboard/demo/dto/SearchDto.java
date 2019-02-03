package com.billboard.demo.dto;

import com.billboard.demo.model.AvailablePeriod;
import lombok.Data;

@Data
public class SearchDto {
    private String keyword;
    private AvailablePeriod availablePeriod;
}
