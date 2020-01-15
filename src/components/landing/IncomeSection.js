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

  const handleChange = e => {
    setNum1(e.target.value);

    console.log(mortgageNum);
  };

  const handleChange2 = e => {
    setNum2(e.target.value);

    console.log(utilitiesNum);
  };

  const handleChange3 = e => {
    setNum3(e.target.value);

    console.log(utilitiesNum);
  };

  const handleChange4 = e => {
    setNum4(e.target.value);

    console.log(utilitiesNum);
  };

  const handleChange5 = e => {
    setNum5(e.target.value);

    console.log(utilitiesNum);
  };

  const handleChange6 = e => {
    setNum6(e.target.value);

    console.log(utilitiesNum);
  };

  const handleChange7 = e => {
    setNum7(e.target.value);

    console.log(utilitiesNum);
  };

  const handleChange8 = e => {
    setNum8(e.target.value);

    console.log(utilitiesNum);
  };

  const handleChange9 = e => {
    setNum9(e.target.value);

    console.log(utilitiesNum);
  };

  const handleChange10 = e => {
    setNum10(e.target.value);

    console.log(utilitiesNum);
  };

  // const handleAdd = () => {
  //   const formatter = new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //     minimumFractionDigits: 2
  //   });

  //   const y = mortgageNum;
  //   const yy = utilitiesNum;

  //   const g = +y + +yy;

  //   console.log(formatter.format(g));
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
                onChange={handleChange}
                value={mortgageNum}
                name="mortgage"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Utilities</p>
              <input
                onChange={handleChange2}
                value={utilitiesNum}
                name="utilities"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Vehicle Payment</p>
              <input
                onChange={handleChange3}
                value={vehicleNum}
                name="vehicle-payment"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Grocery / Food</p>
              <input
                onChange={handleChange4}
                value={groceryNum}
                name="grocery"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Credit Card(s) / Loan(s)</p>
              <input
                onChange={handleChange5}
                value={loanNum}
                name="loan"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Entertainment</p>
              <input
                onChange={handleChange6}
                value={entertainmentNum}
                name="entertainment"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Miscellaneous</p>
              <input
                onChange={handleChange7}
                value={miscNum}
                name="miscellaneous"
                type="number"
              />
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
              <input
                onChange={handleChange8}
                value={netIncomeNum}
                name="net-income"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Other Monthly Income</p>
              <input
                onChange={handleChange9}
                value={otherIncomeNum}
                name="other-income"
                type="number"
              />
            </div>
            <div className="ui-input">
              <p>Monthly Bonuses</p>
              <input
                onChange={handleChange10}
                value={bonusesNum}
                name="bonuses-income"
                type="number"
              />
            </div>
            <div className="ui-input">
              <button>Calculate</button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeSection;
