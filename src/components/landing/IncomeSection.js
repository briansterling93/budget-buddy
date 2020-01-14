import React, { useState } from "react";

const IncomeSection = () => {
  const [mortgageNum, setNum1] = useState("");
  const [utilitiesNum, setNum2] = useState("");
  const [vehicleNum, setNum3] = useState("");
  const [groceryNum, setNum4] = useState("");
  const [loanNum, setNum5] = useState("");
  const [entertainmentNum, setNum6] = useState("");
  const [miscNum, setNum7] = useState("");
  const [netIncomeNum, setNum8] = useState("");
  const [otherIncomeNum, setNum9] = useState("");
  const [bonusesNum, setNum10] = useState("");

  // const handleChange = e => {
  //   setNum1(e.target.value);

  //   console.log(mortgageNum);
  // };

  // const handleChange2 = e => {
  //   setNum2(e.target.value);

  //   console.log(utilitiesNum);
  // };

  // const handleAdd = () => {
  //   const formatter = new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //     minimumFractionDigits: 2
  //   });

  //   const y = formatter.format(mortgageNum);
  //   const yy = formatter.format(utilitiesNum);

  //   console.log(y + yy); //numbers adding as strings instead of integers.. figure out way to add them as #'s
  // };

  return (
    <div id="income-section">
      <div id="income-section2">
        <div>
          <h3 id="expenses-title">Expenses</h3>
          <div id="expenses-input">
            <div className="ui-input">
              <p>Mortgage / Rent</p>
              <input
                // onChange={handleChange}
                value={mortgageNum}
                name="mortgage"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Utilities</p>
              <input
                // onChange={handleChange2}
                value={utilitiesNum}
                name="utilities"
                type="number"
              />
              {/* <button onClick={handleAdd}>Test</button> */}
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
