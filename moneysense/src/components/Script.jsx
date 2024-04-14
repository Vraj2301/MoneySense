import React, { useEffect } from 'react';

function Script() {
  useEffect(() => {
    // JavaScript code for expense tracker form
    const ex = document.getElementById('expense-tracker-form')
    if(ex){
    document.getElementById('expense-tracker-form').addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form values
      const income = parseFloat(document.getElementById('income').value);
      const housing = parseFloat(document.getElementById('housing').value);
      const transportation = parseFloat(document.getElementById('transportation').value);
      const food = parseFloat(document.getElementById('food').value);
      const utilities = parseFloat(document.getElementById('utilities').value);
      const entertainment = parseFloat(document.getElementById('entertainment').value);
      const savings = parseFloat(document.getElementById('savings').value);
      const miscellaneous = parseFloat(document.getElementById('miscellaneous').value);

      // Calculate total expenses
      const totalExpenses = housing + transportation + food + utilities + entertainment + savings + miscellaneous;

      // Calculate budget
      const budget = income - totalExpenses;

      // Display budget result
      const budgetResult = document.getElementById('budget-result');
      const budgetAmount = document.getElementById('budget-amount');
      budgetResult.style.display = 'block';
      budgetAmount.textContent = budget.toFixed(2);
    });}

    const fx = document.getElementById('saving-goals-form')
    if(fx){
    // JavaScript code for saving goals form
    document.getElementById('saving-goals-form').addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form values
      const savingGoal = document.getElementById('savingGoal').value;
      const deadline = document.getElementById('deadline').value;
      const amountToSave = parseFloat(document.getElementById('amountToSave').value);

      // Display saving goals result
      const savingGoalsResult = document.getElementById('saving-goals-result');
      savingGoalsResult.style.display = 'block';
      savingGoalsResult.textContent = `Your saving goal "${savingGoal}" with a deadline of ${deadline} has been submitted successfully. You want to save $${amountToSave}.`;
    });}

    const con = document.getElementById('contact-form')
    if(con){
    // Contact page 
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      // Show confirmation message
      document.getElementById('confirmation').style.display = 'block';
      // Optional: Clear form fields after submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    });}

    if(document.getElementById('debt-repayment-form')){
    // JavaScript code for debt repayment calculator
    document.getElementById('debt-repayment-form').addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form values
      const totalDebt = parseFloat(document.getElementById('totalDebt').value);
      const interestRate = parseFloat(document.getElementById('interestRate').value);
      const monthlyPayment = parseFloat(document.getElementById('monthlyPayment').value);

      // Calculate months to repay debt
      const monthlyInterestRate = interestRate / 100 / 12;
      const monthsToRepay = Math.ceil(Math.log(monthlyPayment / (monthlyPayment - totalDebt * monthlyInterestRate)) / Math.log(1 + monthlyInterestRate));

      // Display result
      const debtRepaymentResult = document.getElementById('debt-repayment-result');
      debtRepaymentResult.textContent = `Your debt will be paid off in ${monthsToRepay} months.`;
      debtRepaymentResult.style.display = 'block';
    });
}

if(document.getElementById('investment-form'))
    {// Investing page
    document.getElementById('investment-form').addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form values
      const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
      const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
      const investmentPeriod = parseFloat(document.getElementById('investmentPeriod').value);
      const annualReturnRate = parseFloat(document.getElementById('annualReturnRate').value);

      // Calculate investment amount
      const years = investmentPeriod;
      const monthlyRate = annualReturnRate / 100 / 12;
      const numberOfMonths = years * 12;
      const futureValue = initialInvestment * Math.pow(1 + monthlyRate, numberOfMonths) +
        monthlyContribution * (Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate;

      // Display result
      const investmentResult = document.getElementById('investment-result');
      const investmentAmount = document.getElementById('investmentAmount');
      const investmentYears = document.getElementById('investmentYears');
      investmentResult.style.display = 'block';
      investmentAmount.textContent = futureValue.toFixed(2);
      investmentYears.textContent = years;
    });}

  }, []); // Empty dependency array to run the effect only once
  

  return null;
}

export default Script;
