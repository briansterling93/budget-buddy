import React, { useState, createContext } from "react";

export const ExpenseContext = createContext();

const ExpenseContextProvider = props => {
  const [expense, setExpense] = useState("");

  const changeExpense = num => {
    setExpense(num);
  };

  return (
    <ExpenseContext.Provider value={{ expense, changeExpense }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
