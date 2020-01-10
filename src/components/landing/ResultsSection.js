import React from "react";

const ResultsSection = () => {
  return (
    <div id="results-section">
      <h1 id="main-title">Budget Buddy</h1>
      <div id="results-box">
        <div id="results-box2">
          <div className="result-output">
            <h3>Income</h3>
            <div id="income-output"></div>
          </div>
          <div className="result-output">
            <h3>Expenses</h3>
            <div id="expenses-output"></div>
          </div>
          <div className="result-output">
            <h3>Available Balance</h3>
            <div id="balance-output"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
