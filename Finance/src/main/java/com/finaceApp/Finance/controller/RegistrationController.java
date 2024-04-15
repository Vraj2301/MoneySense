package com.finaceApp.Finance.controller;

import com.finaceApp.Finance.authentication.RegistrationRequest;
import com.finaceApp.Finance.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/register")
public class RegistrationController {
    final private AccountService accountService;
    @PostMapping("/account")
    public ResponseEntity<?> register(@RequestBody RegistrationRequest request) {
        //accountService.register(request.getEmail(), request.getUsername(), request.getPassword());
        return ResponseEntity.ok("Registration successful");
    }
}
