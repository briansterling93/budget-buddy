import React, { useState, createContext } from "react";

export const IncomeContext = createContext();

const IncomeContextProvider = props => {
  const [income, setIncome] = useState("");

  const changeIncome = n => {
    setIncome(`+ ${n}`);
  };

  const removeIncome = n => {
    setIncome("");
  };

  return (
    <IncomeContext.Provider value={{ income, changeIncome, removeIncome }}>
      {props.children}
    </IncomeContext.Provider>
  );
};

export default IncomeContextProvider;
