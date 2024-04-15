import React from 'react';

function Investing() {
  return (
    <main className="container mt-4">
      <h2 style={{textAlign: "center"}}>Investing</h2>
    <p>The world of investing can be quite intimidating with a multitude of options to grasp. Understanding principles
      such as risk management, portfolio diversification, and investment strategy are vital to wealth growth.</p>
    <p>Here are some tips for effective investing:</p>
    <ul>
      <li>Start investing early to take advantage of compound interest.</li>
      <li>Diversify your portfolio to spread risk.</li>
      <li>Understand your risk tolerance and invest accordingly.</li>
      <li>Consider seeking help from a financial advisor if you're unsure about investing.</li>
    </ul>
    <section>
      <h2 style={{textAlign: "center"}}>Investment Calculator</h2>
      <form id="investment-form">
        <div class="form-group">
          <label for="initialInvestment">Initial Investment</label>
          <input type="number" class="form-control" id="initialInvestment" placeholder="Enter initial investment amount"
            required/>
        </div>
        <div class="form-group">
          <label for="monthlyContribution">Monthly Contribution</label>
          <input type="number" class="form-control" id="monthlyContribution"
            placeholder="Enter monthly contribution amount" required/>
        </div>
        <div class="form-group">
          <label for="investmentPeriod">Investment Period (years)</label>
          <input type="number" class="form-control" id="investmentPeriod" placeholder="Enter investment period in years"
            required/>
        </div>
        <div class="form-group">
          <label for="annualReturnRate">Annual Return Rate (%)</label>
          <input type="number" class="form-control" id="annualReturnRate" placeholder="Enter annual return rate"
            required/>
        </div>
        <button type="submit" class="btn btn-primary">Calculate</button>
      </form>
      <div id="investment-result" class="result" style={{ display: 'none' }}>
        Your investment will grow to $<span id="investmentAmount"></span> in <span id="investmentYears"></span>
        years.
      </div>
    </section>
    </main>
  );
}

export default Investing;
