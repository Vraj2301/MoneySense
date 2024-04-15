package com.finaceApp.Finance.component;

import com.finaceApp.Finance.enums.Roles;
import com.finaceApp.Finance.model.Account;
import com.finaceApp.Finance.model.Leaderboard;
import com.finaceApp.Finance.model.Question;
import com.finaceApp.Finance.repository.AccountRepository;
import com.finaceApp.Finance.repository.LeaderboardRepository;
import com.finaceApp.Finance.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DatabaseInitializer implements CommandLineRunner {

    final private QuestionRepository questionRepository;
    final private AccountRepository accountRepository;
    final private LeaderboardRepository leaderboardRepository;
    final private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        String[] optionsQuestion1 = {
                "To report income earned from investments",
                "To apply for a mortgage",
                "To determine the amount of federal income tax to withhold from an employee's paycheck",
                "To calculate retirement benefits"
        };

        String[] optionsQuestion2 = {
                "5% of unpaid taxes per month, up to a maximum of 25%",
                "$50",
                "1% of unpaid taxes per month, up to a maximum of 12%",
                "No penalty"
        };

        String[] optionsQuestion3 = {
                "Commuting expenses",
                "Entertainment expenses",
                "Health insurance premiums",
                "Clothing purchases"
        };

        String[] optionsQuestion4 = {
                "10%",
                "15%",
                "20%",
                "25%"
        };

        String[] optionsQuestion5 = {
                "To report income earned from wages",
                "To report income earned from self-employment",
                "To report income earned from interest and dividends",
                "To report income earned from rental properties"
        };
        Question question1 = new Question(1L, "What is the purpose of a W-4 form?", optionsQuestion1, 2, "The W-4 form is used by employers to determine how much federal income tax to withhold from an employee's paycheck based on their filing status and allowances claimed.");

        Question question2 = new Question(2L, "What is the penalty for failing to file a tax return by the due date?", optionsQuestion2, 0, "The penalty for failing to file a tax return by the due date is 5% of the unpaid taxes per month, up to a maximum of 25%.");

        Question question3 = new Question(3L, "Which of the following is a tax-deductible expense for self-employed individuals?", optionsQuestion3, 2, "Self-employed individuals can typically deduct health insurance premiums as a business expense, subject to certain limitations.");

        Question question4 = new Question(4L, "What is the capital gains tax rate for assets held for more than one year?", optionsQuestion4, 2, "Assets held for more than one year are subject to long-term capital gains tax, with rates ranging from 0% to 20% depending on the individual's income level.");

        Question question5 = new Question(5L, "What is the purpose of a Form 1099?", optionsQuestion5, 2, "Form 1099 is used to report various types of income other than wages or salaries, including interest, dividends, and certain types of miscellaneous income.");

        questionRepository.save(question1);
        questionRepository.save(question2);
        questionRepository.save(question3);
        questionRepository.save(question4);
        questionRepository.save(question5);


        for (int i = 1; i <= 10; i++) {
            Account account = new Account();
            account.setUsername("user" + i);
            account.setEmail("user" + i + "@example.com");
            account.setPassword(passwordEncoder.encode("userpassword" + i));
            account.setRole(Roles.USER);
            account.setScore(i * 2);
            accountRepository.save(account);
            Leaderboard leaderboard = new Leaderboard();
            leaderboard.setAccount(account);
            leaderboardRepository.save(leaderboard);
        }

        System.out.println("Database initialized with sample questions, account, and leaderboard.");
    }
}
