package com.billboard.demo.controller;

import com.billboard.demo.dto.LeaserRegDto;
import com.billboard.demo.dto.OwnerRegDto;
import com.billboard.demo.dto.RegDto;
import com.billboard.demo.model.Leaser;
import com.billboard.demo.model.Owner;
import com.billboard.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/api/reg/owner", method = RequestMethod.POST)
    public Owner ownerReg(@RequestBody OwnerRegDto ownerRegDto){
        return userService.registrateOwner(
                ownerRegDto.getUsername(),
                ownerRegDto.getPassword(),
                ownerRegDto.getFirstName(),
                ownerRegDto.getLastName(),
                ownerRegDto.getEMail(),
                ownerRegDto.getLastName());
    }

    @RequestMapping(value = "/api/reg/leaser", method = RequestMethod.POST)
    public Leaser leaserReg(@RequestBody LeaserRegDto leaserRegDto){
        return userService.registrateLeaser(
                leaserRegDto.getUsername(),
                leaserRegDto.getPassword(),
                leaserRegDto.getFirstName(),
                leaserRegDto.getLastName(),
                leaserRegDto.getEMail()
        );
    }

    @RequestMapping(value = "/api/reg/admin", method = RequestMethod.POST)
    public Boolean adminReg(@RequestBody RegDto regDto){
        return userService.registrateAdmin(regDto.getUsername(), regDto.getPassword());
    }
}
