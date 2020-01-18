import React from "react";
import ResultsSection from "./components/landing/ResultsSection";
import IncomeSection from "./components/landing/IncomeSection";
import IncomeContextProvider from "./contexts/IncomeContext";
import ExpenseContextProvider from "./contexts/ExpenseContext";

import "./components/sass/main.scss";

const App = () => {
  return (
    <div id="main-app">
      <IncomeContextProvider>
        <ExpenseContextProvider>
          <ResultsSection />
          <IncomeSection />
        </ExpenseContextProvider>
      </IncomeContextProvider>
    </div>
  );
};

export default App;
