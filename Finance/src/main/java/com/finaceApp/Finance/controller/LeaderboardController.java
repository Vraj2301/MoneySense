package com.finaceApp.Finance.controller;

import com.finaceApp.Finance.model.Leaderboard;
import com.finaceApp.Finance.service.LeadboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/leaderboard")
public class LeaderboardController {

    final private LeadboardService leadboardService;

    @GetMapping("/get-leaderboard")
    public List<Leaderboard> getLeaderboard(){
        return leadboardService.getLeaderboard();
    }


}
