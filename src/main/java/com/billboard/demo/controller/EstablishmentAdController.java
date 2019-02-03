package com.billboard.demo.controller;

import com.billboard.demo.dao.EstablishmentAdRepository;
import com.billboard.demo.dao.OwnerRepository;
import com.billboard.demo.dto.EstablishmentAdCreateDto;
import com.billboard.demo.model.EstablishmentAd;
import com.billboard.demo.model.Owner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EstablishmentAdController {
    @Autowired
    private EstablishmentAdRepository repo;

    @Autowired
    private OwnerRepository ownerRepository;

    @RequestMapping(value = "api/establishment_ad", method = RequestMethod.POST)
    public EstablishmentAd createEstablishmentAd(@RequestBody EstablishmentAdCreateDto dto){
        final EstablishmentAd ad = new EstablishmentAd();

        // find the owner
        Owner owner = ownerRepository.findById(dto.getOwnerId()).orElse(null);

        // fill in the field
        ad.setAddress(dto.getAddress());
        ad.setEstablishmentName(dto.getName());
        ad.setRating(0.0);
        ad.setAvailabilities(dto.getAvailablities());
        dto.getAvailablities().forEach(availablePeriod -> {
            availablePeriod.setAdSource(ad);
        });
        ad.setDailyPrice(dto.getDailyPrice());
        ad.setOwner(owner);

        return repo.save(ad); // persist
    }
}
