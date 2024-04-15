package com.finaceApp.Finance.repository;

import com.finaceApp.Finance.model.Leaderboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeaderboardRepository extends JpaRepository<Leaderboard, Long> {
    @Query(value = "SELECT lb FROM Leaderboard lb JOIN lb.account acc ORDER BY acc.score DESC")
    List<Leaderboard> findAllByOrderScoreDesc();

}
