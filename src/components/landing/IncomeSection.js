import React from "react";

const IncomeSection = () => {
  return (
    <div id="income-section">
      <div id="income-section2">
        <div>
          <h3>Income</h3>
          <div id="income-input">
            <div>
              <p>Net Monthly Income</p>
              <input />
            </div>
            <div>
              <p>Other Monthly Income</p>
              <input />
            </div>
            <div>
              <p>Monthly Bonuses</p>
              <input />
            </div>
          </div>
        </div>
        <div>
          <h3>Expenses</h3>
          <div id="expenses-input">
            <div>
              <p>Mortgage / Rent</p>
              <input />
            </div>
            <div>
              <p>Utilities</p>
              <input />
            </div>
            <div>
              <p>Vehicle Payment</p>
              <input />
            </div>
            <div>
              <p>Grocery / Food</p>
              <input />
            </div>
            <div>
              <p>Credit Card(s) / Loan(s)</p>
              <input />
            </div>
            <div>
              <p>Entertainment</p>
              <input />
            </div>
            <div>
              <p>Miscellaneous</p>
              <input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeSection;
