package com.finaceApp.Finance.service;

import com.finaceApp.Finance.model.Leaderboard;
import com.finaceApp.Finance.repository.LeaderboardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LeadboardService {
    final private LeaderboardRepository leaderBoardRepository;

    public List<Leaderboard> getLeaderboard(){
        return leaderBoardRepository.findAllByOrderScoreDesc();
    }
}
