package com.billboard.demo.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;

public class CustomUsernamePasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) throws AuthenticationException {
        if(!request.getMethod().equals("POST")){
            // if it is not a post method
            throw new AuthenticationServiceException("Not supported HTTP method: " + request.getMethod());
        }

        UsernamePasswordAuthenticationToken token;

        try {
            BufferedReader reader = request.getReader();
            StringBuffer sb = new StringBuffer();
            String line;

            while((line = reader.readLine()) != null){
                sb.append(line);
            }

            String str = sb.toString();
            ObjectMapper mapper = new ObjectMapper();
            AuthReq authReq = mapper.readValue(str, AuthReq.class);
            if(authReq != null){
                token =  new UsernamePasswordAuthenticationToken(authReq.getUsername(), authReq.getPassword());
            } else {
                token = new UsernamePasswordAuthenticationToken("", "");
            }
        } catch (Exception e) {
            token = new UsernamePasswordAuthenticationToken("", "");
        }
        return this.getAuthenticationManager().authenticate(token);
    }
}
