package com.billboard.demo.service;

import com.billboard.demo.dao.UserRepository;
import com.billboard.demo.model.Leaser;
import com.billboard.demo.model.Owner;
import com.billboard.demo.model.User;
import com.billboard.demo.security.CustomUserDetails;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;

@Service
@Log4j2
public class CustomUserDetailsService implements UserDetailsService {
    private UserRepository repo;
    private PasswordEncoder encoder;

    @Autowired
    public CustomUserDetailsService(UserRepository userRepository, PasswordEncoder encoder){
        this.repo = userRepository;
        this.encoder = encoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User daoUser;
        if(username.equals("") || (daoUser = repo.findByUsernameEquals(username)) == null){
            throw new UsernameNotFoundException(username + " is not found in the database");
        }

        return new CustomUserDetails(daoUser);
    }

    public boolean registration(
            @NotNull  String username,
            @NotNull  String password,
            Leaser leaser,
            Owner owner,
            @NotNull  String role){
        if(username.equals("") || password.equals("") || role.equals("")){
            log.info("invalid input for registration");
            return false;
        }

        // check if the user exists
        if(repo.findByUsernameEquals(username) != null){
            log.info("user with name " + username + " has existed in the database");
            return false;
        }

        String encoded = encoder.encode(password);

        User user = new User();
        user.setUsername(username);
        user.setPasswordHash(encoded);
        user.setOwner(owner);
        user.setLeaser(leaser);
        user.setRole(role);

        user = repo.save(user);
        if(user == null){
            log.error("save failed for registration");
            return false;
        }

        log.info("registration succeeded for user " + username);
        return true;
    }
}
