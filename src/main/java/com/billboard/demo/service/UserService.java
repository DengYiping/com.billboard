package com.billboard.demo.service;

import com.billboard.demo.dao.LeaserRepository;
import com.billboard.demo.dao.OwnerRepository;
import com.billboard.demo.model.Leaser;
import com.billboard.demo.model.Owner;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class UserService {
    private CustomUserDetailsService customUserDetailsService;
    private OwnerRepository ownerRepository;
    private LeaserRepository leaserRepository;

    @Autowired
    public UserService(CustomUserDetailsService customUserDetailsService, OwnerRepository ownerRepository, LeaserRepository leaserRepository) {
        this.customUserDetailsService = customUserDetailsService;
        this.ownerRepository = ownerRepository;
        this.leaserRepository = leaserRepository;

        // get admin running
        customUserDetailsService
                .registration("admin", "devpass", null, null, "ROLE_ADMIN,ROLE_USER");
        log.info("username: admin");
        log.info("password: devpass");


    }

    public Owner registrateOwner(
            String username,
            String password,
            String firstName,
            String lastName,
            String eMail,
            String iban
    ){
        Owner owner = new Owner();

        owner.setFirstName(firstName);
        owner.setLastName(lastName);
        owner.setEMail(eMail);
        owner.setIban(iban);

        owner = ownerRepository.save(owner);
        if(customUserDetailsService.registration(
                username,
                password,
                null,
                owner,
                "ROLE_USER")){
            return owner;
        };
        return null;
    }


    public Leaser registrateLeaser(
            String username,
            String password,
            String firstName,
            String lastName,
            String eMail
    ){
        Leaser leaser = new Leaser();

        leaser.setFirstName(firstName);
        leaser.setLastName(lastName);
        leaser.setEMail(eMail);

        leaser = leaserRepository.save(leaser);
        if(customUserDetailsService
                .registration(
                        username,
                        password,
                        leaser,
                        null,
                        "ROLE_USER"
                )){
            return leaser;
        }
        return null;
    }

    public boolean registrateAdmin(
            String username,
            String password
    ){
        return customUserDetailsService.registration(
                username,
                password,
                null,
                null,
                "ROLE_ADMIN,ROLE_USER"
        );
    }
}
