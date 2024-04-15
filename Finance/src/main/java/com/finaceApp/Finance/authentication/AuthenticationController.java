package com.finaceApp.Finance.authentication;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/register-account")
    public ResponseEntity<AuthenticationReponse> registerUser(
            @RequestBody RegistrationRequest request
    ){
        return ResponseEntity.ok(authenticationService.registerAccount(request.getEmail(), request.getUsername(), request.getPassword()));
    }

    @PostMapping("/authenticate-account")
    public ResponseEntity<AuthenticationReponse> authenticateUser(
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(authenticationService.authenticateAccount(request));
    }
}
