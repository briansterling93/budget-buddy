import React, { useState } from "react";

const IncomeSection = () => {
  const [mortgageNum, setNum1] = useState("0.00");
  const [utilitiesNum, setNum2] = useState("0.00");
  const [vehicleNum, setNum3] = useState("0.00");
  const [groceryNum, setNum4] = useState("0.00");
  const [loanNum, setNum5] = useState("0.00");
  const [entertainmentNum, setNum6] = useState("0.00");
  const [miscNum, setNum7] = useState("0.00");
  const [netIncomeNum, setNum8] = useState("0.00");
  const [otherIncomeNum, setNum9] = useState("0.00");
  const [bonusesNum, setNum10] = useState("0.00");

  const changeNum = () => {
    alert("changed");
  };
  return (
    <div id="income-section">
      <div id="income-section2">
        <div>
          <h3 id="expenses-title">Expenses</h3>
          <div id="expenses-input">
            <div className="ui-input">
              <p>Mortgage / Rent</p>
              <input value={mortgageNum} name="mortgage" type="number" />
            </div>
            <div className="ui-input">
              <p>Utilities</p>
              <input value={utilitiesNum} name="utilities" type="number" />
            </div>
            <div className="ui-input">
              <p>Vehicle Payment</p>
              <input value={vehicleNum} name="vehicle-payment" type="number" />
            </div>
            <div className="ui-input">
              <p>Grocery / Food</p>
              <input value={groceryNum} name="grocery" type="number" />
            </div>
            <div className="ui-input">
              <p>Credit Card(s) / Loan(s)</p>
              <input value={loanNum} name="loan" type="number" />
            </div>
            <div className="ui-input">
              <p>Entertainment</p>
              <input
                value={entertainmentNum}
                name="entertainment"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Miscellaneous</p>
              <input value={miscNum} name="miscellaneous" type="number" />
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
              <input value={netIncomeNum} name="net-income" type="number" />
            </div>
            <div className="ui-input">
              <p>Other Monthly Income</p>
              <input value={otherIncomeNum} name="other-income" type="number" />
            </div>
            <div className="ui-input">
              <p>Monthly Bonuses</p>
              <input value={bonusesNum} name="bonuses-income" type="number" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeSection;
