import React from 'react';

function BudgetingPage() {
  return (
    <main className="container">
      <section>
        <h2 style={{textAlign: "center"}}>Budgeting</h2>
        <p>
          Budgeting or organizing your spending is a foundational tool for wealth accumulation. People often overlook
          tracking expenses and planning for the future which can lead to problems down the line.
        </p>
      </section>
    <section>
      <h2 style={{textAlign: "center"}}>Expense Tracker</h2>
      <form id="expense-tracker-form">
        <div class="form-group">
          <label for="income">Monthly Income</label>
          <input type="number" class="form-control" id="income" placeholder="Enter your monthly income" required />
        </div>
        <h4>Expenses</h4>
        <div class="form-group">
          <label for="housing">Housing</label>
          <input type="number" class="form-control" id="housing" placeholder="Enter your housing expenses" required />
        </div>
        <div class="form-group">
          <label for="transportation">Transportation</label>
          <input type="number" class="form-control" id="transportation" placeholder="Enter your transportation expenses"
            required />
        </div>
        <div class="form-group">
          <label for="food">Food</label>
          <input type="number" class="form-control" id="food" placeholder="Enter your food expenses" required />
        </div>
        <div class="form-group">
          <label for="utilities">Utilities</label>
          <input type="number" class="form-control" id="utilities" placeholder="Enter your utilities expenses" required />
        </div>
        <div class="form-group">
          <label for="entertainment">Entertainment</label>
          <input type="number" class="form-control" id="entertainment" placeholder="Enter your entertainment expenses"
            required />
        </div>
        <div class="form-group">
          <label for="savings">Savings</label>
          <input type="number" class="form-control" id="savings" placeholder="Enter your savings" required />
        </div>
        <div class="form-group">
          <label for="miscellaneous">Miscellaneous</label>
          <input type="number" class="form-control" id="miscellaneous" placeholder="Enter your miscellaneous expenses"
            required />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div id="budget-result" class="result" style={{ display: 'none' }}>
        Your budget is: $<span id="budget-amount"></span>
      </div>
    </section>
    <section>
      <h2 style={{textAlign: "center"}}>Saving Goals</h2>
      <p>Setting up a saving goal is a crucial step towards financial freedom. It helps you to track your progress and
        stay motivated to achieve your financial goals.</p>
      <form id="saving-goals-form">
        <div class="form-group">
          <label for="savingGoal">Saving Goal</label>
          <input type="text" class="form-control" id="savingGoal" placeholder="Enter your saving goal" required />
        </div>
        <div class="form-group">
          <label for="deadline">Deadline</label>
          <input type="date" class="form-control" id="deadline" required />
        </div>
        <div class="form-group">
          <label for="amountToSave">Amount to Save</label>
          <input type="number" class="form-control" id="amountToSave" placeholder="Enter the amount you want to save"
            required />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div id="saving-goals-result" class="result" style={{ display: 'none' }}>
        Your saving goals have been submitted successfully.
      </div>
    </section>
    </main>
  );
}

export default BudgetingPage;