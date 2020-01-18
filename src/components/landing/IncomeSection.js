import React, { useState, useContext } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { ResultContext } from "../../contexts/ResultContext";

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

  const { changeIncome, removeIncome } = useContext(IncomeContext); //context
  const { changeExpense, removeExpense } = useContext(ExpenseContext); //context
  const { changeResult } = useContext(ResultContext); //context

  const handleChange = e => {
    setNum1(e.target.value);
  };

  const handleChange2 = e => {
    setNum2(e.target.value);
  };

  const handleChange3 = e => {
    setNum3(e.target.value);
  };

  const handleChange4 = e => {
    setNum4(e.target.value);
  };

  const handleChange5 = e => {
    setNum5(e.target.value);
  };

  const handleChange6 = e => {
    setNum6(e.target.value);
  };

  const handleChange7 = e => {
    setNum7(e.target.value);
  };

  const handleChange8 = e => {
    setNum8(e.target.value);
  };

  const handleChange9 = e => {
    setNum9(e.target.value);
  };

  const handleChange10 = e => {
    setNum10([e.target.value]);
  };

  const handleReset = () => {
    setNum1("0.00");
    setNum2("0.00");
    setNum3("0.00");
    setNum4("0.00");
    setNum5("0.00");
    setNum6("0.00");
    setNum7("0.00");
    setNum8("0.00");
    setNum9("0.00");
    setNum10("0.00");

    removeIncome(""); //context
    removeExpense(""); //context
    changeResult(""); //context
  };

  const handleMath = () => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });

    const income = +netIncomeNum + +otherIncomeNum + +bonusesNum;

    const expenses =
      +mortgageNum +
      +utilitiesNum +
      +vehicleNum +
      +groceryNum +
      +loanNum +
      +entertainmentNum +
      +miscNum;

    const sum = formatter.format(+income - +expenses);

    changeIncome(formatter.format(income)); //context
    changeExpense(formatter.format(expenses)); //context
    changeResult(formatter.format(sum)); //context

    console.log(+sum);
  };

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
            <div id="ui-btns">
              <div id="calc-button-div">
                <button id="calc-button" onClick={handleMath}>
                  Calculate
                </button>
              </div>
              <div id="reset-button-div">
                <button id="reset-button" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeSection;
