package com.finaceApp.Finance.service;

import com.finaceApp.Finance.model.Account;
import com.finaceApp.Finance.model.Leaderboard;
import com.finaceApp.Finance.repository.AccountRepository;
import com.finaceApp.Finance.repository.LeaderboardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AccountService {
    final private AccountRepository accountRepository;
    final private LeaderboardRepository leaderboardRepository;

    public List<Account> getAccounts(){
        return null;
    }

    public Account getAccount(Long account_id){
        return accountRepository.findById(account_id).orElseThrow(NoSuchElementException::new);
    }
    public void updateAccountScore(Long account_id){
        Account account = this.getAccount(account_id);
        int increment = 1;
        account.setScore(account.getScore()+ increment);
        accountRepository.save(account);
    }

}
