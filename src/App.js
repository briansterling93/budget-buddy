import React from "react";
import ResultsSection from "./components/landing/ResultsSection";
import IncomeSection from "./components/landing/IncomeSection";

import "./components/sass/main.scss";

const App = () => {
  return (
    <div id="main-app">
      <ResultsSection />
      <IncomeSection />
    </div>
  );
};

export default App;
