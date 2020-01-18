import React from "react";
import ResultsSection from "./components/landing/ResultsSection";
import IncomeSection from "./components/landing/IncomeSection";
import IncomeContextProvider from "./contexts/IncomeContext";
import ExpenseContextProvider from "./contexts/ExpenseContext";
import ResultContextProvider from "./contexts/ResultContext";

import "./components/sass/main.scss";

const App = () => {
  return (
    <div id="main-app">
      <IncomeContextProvider>
        <ExpenseContextProvider>
          <ResultContextProvider>
            <ResultsSection />
            <IncomeSection />
          </ResultContextProvider>
        </ExpenseContextProvider>
      </IncomeContextProvider>
    </div>
  );
};

export default App;
