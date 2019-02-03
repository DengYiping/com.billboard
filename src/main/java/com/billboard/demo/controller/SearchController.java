package com.billboard.demo.controller;

import com.billboard.demo.dao.AvailablePeriodRepository;
import com.billboard.demo.dto.SearchDto;
import com.billboard.demo.dto.SearchResultDto;
import com.billboard.demo.model.AdSource;
import com.billboard.demo.model.AvailablePeriod;
import com.billboard.demo.model.EstablishmentAd;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class SearchController {
    @Autowired
    AvailablePeriodRepository availablityRepo;

    @RequestMapping(value = "/api/search", method = RequestMethod.POST)
    public List<SearchResultDto> searchAll(@RequestBody SearchDto dto) {
        List<AvailablePeriod> availablePeriods = availablityRepo.findAvailablePeriodByStartDateLessThanEqualAndEndDateGreaterThanEqual(
                dto.getAvailablePeriod().getStartDate(),
                dto.getAvailablePeriod().getEndDate()
        );
        List<SearchResultDto> dtos = new LinkedList<>();

        for(AvailablePeriod period: availablePeriods){
            AdSource source = period.getAdSource();
            if(source != null){
                SearchResultDto resultDto = new SearchResultDto();

                Long ownerId = source.getOwner().getId();
                Long adSourceId = source.getId();
                resultDto.setAdSourceId(adSourceId);
                resultDto.setOwnerId(ownerId);
                resultDto.setStartDay(period.getStartDate());
                resultDto.setEndDay(period.getEndDate());

                if(source instanceof EstablishmentAd){
                    EstablishmentAd eAd = (EstablishmentAd) source;
                    resultDto.setAddress(eAd.getAddress());
                    resultDto.setDailyPrice(eAd.getDailyPrice());
                    resultDto.setName(eAd.getEstablishmentName());
                }

                // search filter here
                if(resultDto.getAddress().contains(dto.getKeyword())){
                    dtos.add(resultDto);
                }
            }
        }
        return dtos;
    }
}
