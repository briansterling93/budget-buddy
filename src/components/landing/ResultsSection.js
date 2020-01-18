import React, { useState, useContext } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";
import { ExpenseContext } from "../../contexts/ExpenseContext";

const ResultsSection = () => {
  const { income } = useContext(IncomeContext);
  const { expense } = useContext(ExpenseContext);
  return (
    <div id="results-section">
      <div id="results-box">
        <div id="results-box2">
          <div className="result-output">
            <div id="income-output">
              <h3>Income</h3>
              <h3>{income}</h3>
            </div>
          </div>
          <div className="result-output">
            <div id="expenses-output">
              <h3>Expenses</h3>
              {expense}
            </div>
          </div>
          <div className="result-output">
            <div id="balance-output"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
