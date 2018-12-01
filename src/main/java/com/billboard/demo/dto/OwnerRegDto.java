package com.billboard.demo.dto;

import lombok.Data;

@Data
public class OwnerRegDto {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String eMail;
    private String iban;
}
