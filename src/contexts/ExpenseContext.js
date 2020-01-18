import React, { useState, createContext } from "react";

export const ExpenseContext = createContext();

const ExpenseContextProvider = props => {
  const [expense, setExpense] = useState("");

  const changeExpense = n => {
    setExpense(`- ${n}`);
  };

  const removeExpense = n => {
    setExpense("");
  };

  return (
    <ExpenseContext.Provider value={{ expense, changeExpense, removeExpense }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
