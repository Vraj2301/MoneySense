package com.finaceApp.Finance.controller;

import com.finaceApp.Finance.model.Account;
import com.finaceApp.Finance.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accounts")
public class AccountController {
    final private AccountService accountService;
    @GetMapping("/get-accounts")
    public List<Account> getAccounts(){
        return accountService.getAccounts();
    }

    @GetMapping("/get-account/{account_id}")
    public Account getAccount(@PathVariable Long account_id){
        return accountService.getAccount(account_id);
    }

    @PutMapping("/update-score/{account_id}")
    public void updateAccount(@PathVariable Long account_id){
         accountService.updateAccountScore(account_id);
    }
}
