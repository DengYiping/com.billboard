package com.billboard.demo.controller;

import com.billboard.demo.dao.AvailablePeriodRepository;
import com.billboard.demo.dto.SearchDto;
import com.billboard.demo.model.AdSource;
import com.billboard.demo.model.AvailablePeriod;
import com.billboard.demo.model.EstablishmentAd;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class SearchController {
    @Autowired
    AvailablePeriodRepository availablityRepo;

    @RequestMapping(value = "/api/search", method = RequestMethod.POST)
    public List<AdSource> searchAll(@RequestBody SearchDto dto) {
        List<AvailablePeriod> periods = availablityRepo.findAvailablePeriodByStartDateAfterAndEndDateBefore(
                dto.getAvailablePeriod().getStartDate(),
                dto.getAvailablePeriod().getEndDate()
        );
        return periods.stream().map(period -> period.getAdSource()).collect(Collectors.toList());
    }
}
