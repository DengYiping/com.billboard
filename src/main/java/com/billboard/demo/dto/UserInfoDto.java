package com.billboard.demo.dto;

import com.billboard.demo.model.Leaser;
import com.billboard.demo.model.Owner;
import lombok.Data;

@Data
public class UserInfoDto {
    private String username;

    private Leaser leaser;

    private Owner owner;

    private Boolean isLogedIn;
}
