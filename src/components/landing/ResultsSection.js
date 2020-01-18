import React, { useContext } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { ResultContext } from "../../contexts/ResultContext";

const ResultsSection = () => {
  const { income } = useContext(IncomeContext);
  const { expense } = useContext(ExpenseContext);
  const { result } = useContext(ResultContext);
  return (
    <div id="results-section">
      <div id="results-box">
        <div id="results-box2">
          <div className="result-output">
            <div id="income-output">
              <h3>Income</h3>
              <h2 id="income-output-div">{income}</h2>
            </div>
          </div>
          <div className="result-output">
            <div id="expenses-output">
              <h3>Expenses</h3>
              <h2>{expense}</h2>
            </div>
          </div>
          <div className="result-output">
            <div id="balance-output">{result}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
