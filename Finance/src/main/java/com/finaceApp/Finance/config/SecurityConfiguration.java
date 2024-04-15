package com.finaceApp.Finance.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;





@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration{

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth ->
                        auth.requestMatchers(new AntPathRequestMatcher("/api/auth/**")).permitAll()

                                // .requestMatchers(new AntPathRequestMatcher("/api/users/**")).hasAuthority("USER")
                                // .requestMatchers(new AntPathRequestMatcher("/api/brokers/**")).hasAuthority("BROKER")
                                .requestMatchers(new AntPathRequestMatcher("/api/questions/**")).permitAll()
                                .requestMatchers(new AntPathRequestMatcher("/api/leaderboard/**")).permitAll()
                                .requestMatchers(new AntPathRequestMatcher("/api/accounts/**")).permitAll()
                                //.hasAnyAuthority("USER", "BROKER")

                                .anyRequest().authenticated()

                );

        http.authenticationProvider(authenticationProvider);

        http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

}