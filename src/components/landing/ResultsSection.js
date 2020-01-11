import React from "react";

const ResultsSection = () => {
  return (
    <div id="results-section">
      <div id="results-box">
        <div id="results-box2">
          <div className="result-output">
            <div id="income-output">
              <h3>Income</h3>
            </div>
          </div>
          <div className="result-output">
            <div id="expenses-output">
              <h3>Expenses</h3>
            </div>
          </div>
          <div className="result-output">
            <div id="balance-output">
              <h3>Remaining Funds</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
