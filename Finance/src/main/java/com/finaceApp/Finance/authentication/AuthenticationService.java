package com.finaceApp.Finance.authentication;

import com.finaceApp.Finance.config.JwtService;
import com.finaceApp.Finance.enums.Roles;
import com.finaceApp.Finance.model.Account;
import com.finaceApp.Finance.model.Leaderboard;
import com.finaceApp.Finance.repository.AccountRepository;
import com.finaceApp.Finance.repository.LeaderboardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    final private AccountRepository accountRepository;
    final private LeaderboardRepository leaderboardRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public AuthenticationReponse  registerAccount(String email, String username, String password) {
        var account = Account.builder()
                .email(email)
                .username(username)
                .password(passwordEncoder.encode(password))
                .score(0)
                .role(Roles.USER)
                .build();
        Account savedAccount = accountRepository.save(account);
        Leaderboard leaderboard = new Leaderboard();
        leaderboard.setAccount(savedAccount);
        leaderboardRepository.save(leaderboard);
        var jwtToken = jwtService.generateToken(savedAccount.getAccount_id(),savedAccount.getRole().toString(),account);
        return AuthenticationReponse.builder().token(jwtToken).build();
    }


    public AuthenticationReponse authenticateAccount(AuthenticationRequest authenticationRequest){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authenticationRequest.getUsername(),
                authenticationRequest.getPassword()
        ));
        var account = accountRepository.findByUsername(authenticationRequest.getUsername()).orElseThrow();
        var jwtToken = jwtService.generateToken(account.getAccount_id(),account.getRole().toString(),account);
        return AuthenticationReponse.builder().token(jwtToken).build();
    }
}
