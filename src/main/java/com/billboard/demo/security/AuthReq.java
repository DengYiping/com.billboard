package com.billboard.demo.security;

import lombok.Data;

@Data
public class AuthReq {
    private String username;
    private String password;
}
