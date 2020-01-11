import React from "react";

const IncomeSection = () => {
  return (
    <div id="income-section">
      <div id="income-section2">
        <div>
          <h3 id="expenses-title">Expenses</h3>
          <div id="expenses-input">
            <div className="ui-input">
              <p>Mortgage / Rent</p>
              <input />
            </div>
            <div className="ui-input">
              <p>Utilities</p>
              <input />
            </div>
            <div className="ui-input">
              <p>Vehicle Payment</p>
              <input />
            </div>
            <div className="ui-input">
              <p>Grocery / Food</p>
              <input />
            </div>
            <div className="ui-input">
              <p>Credit Card(s) / Loan(s)</p>
              <input />
            </div>
            <div className="ui-input">
              <p>Entertainment</p>
              <input />
            </div>
            <div className="ui-input">
              <p>Miscellaneous</p>
              <input />
            </div>
            <div id="reset-button">
              <br />
              <button id="reset-button2">Reset</button>
            </div>
          </div>
        </div>
        <div>
          <h3 id="income-title">Income</h3>
          <div id="income-input">
            <div className="ui-input">
              <p>Net Monthly Income</p>
              <input />
            </div>
            <div className="ui-input">
              <p>Other Monthly Income</p>
              <input />
            </div>
            <div className="ui-input">
              <p>Monthly Bonuses</p>
              <input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeSection;
