package com.billboard.demo.security;

import com.billboard.demo.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class CustomUserDetails implements UserDetails {
    private User user;

    public CustomUserDetails(User user){
        this.user = user;
    }

    @Override
    public List<GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> list = new ArrayList<>();
        String roleStr = user.getRole();
        if(roleStr.equals(""))
            return list;

        String[] splitedRoles = roleStr.split(",");

        for(int i = 0; i < splitedRoles.length; i++){
            if(!splitedRoles[i].equals("")){
                GrantedAuthority authority = new SimpleGrantedAuthority(splitedRoles[i]);
                list.add(authority);
            }
        }
        return list;
    }

    @Override
    public String getPassword() {
        return user.getPasswordHash();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
