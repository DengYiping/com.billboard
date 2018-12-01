package com.billboard.demo.controller;

import com.billboard.demo.dao.UserRepository;
import com.billboard.demo.dto.UserInfoDto;
import com.billboard.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginInfoController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/api/userinfo", method = RequestMethod.GET)
    private UserInfoDto getUserInfo(Authentication authentication){
        UserInfoDto dto = new UserInfoDto();
        dto.setIsLogedIn(false);
        if(authentication == null || authentication instanceof AnonymousAuthenticationToken){
            // this is anoymous
            return dto;
        }

        String name = authentication.getName();

        // must be not null
        User user = userRepository.findByUsernameEquals(name);

        if(user == null){
            return dto;
        }
        dto.setIsLogedIn(true);

        dto.setUsername(user.getUsername());
        dto.setOwner(user.getOwner());
        dto.setLeaser(user.getLeaser());
        return dto;
    }
}
