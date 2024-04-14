import React from 'react';

function Debt_management() {
  return (
    <main className="container mt-4">
      <section>
      <h2>Debt Repayment Calculator</h2>
      <form id="debt-repayment-form">
        <div class="form-group">
          <label for="totalDebt">Total Debt Amount</label>
          <input type="number" class="form-control" id="totalDebt" placeholder="Enter your total debt amount" required />
        </div>
        <div class="form-group">
          <label for="interestRate">Interest Rate (%)</label>
          <input type="number" class="form-control" id="interestRate" placeholder="Enter the interest rate" required/>
        </div>
        <div class="form-group">
          <label for="monthlyPayment">Monthly Payment</label>
          <input type="number" class="form-control" id="monthlyPayment" placeholder="Enter your monthly payment amount"
            required/>
        </div>
        <button type="submit" class="btn btn-primary">Calculate</button>
      </form>
      <div id="debt-repayment-result" class="result" style={{ display: 'none' }}>
        Your debt will be paid off in <span id="monthsToRepay"></span> months.
      </div>
    </section>
    <h2>Debt Management</h2>
    <p>Debt is a huge sector in which people lack literacy. They tend to borrow without really thinking about a good
      repayment strategy, which is a major factor in causing financial stress.</p>
    <p>Here are some tips for effective debt management:</p>
    <ul>
      <li>Create a debt repayment plan that prioritizes high-interest debts first.</li>
      <li>Consider consolidating your debts into one loan with a lower interest rate.</li>
      <li>Avoid taking on new debt while paying off existing debts.</li>
      <li>Consider seeking help from a credit counseling agency if you're struggling to manage your debts.</li>
    </ul>
    </main>
  );
}

export default Debt_management;
