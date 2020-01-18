import React, { useState, createContext } from "react";

export const ResultContext = createContext();

const ResultContextProvider = props => {
  const [result, setResult] = useState("");

  const changeResult = n => {
    setResult(`Monthly Funds: ${n}`);
  };

  const removeResult = n => {
    setResult("");
  };

  return (
    <ResultContext.Provider value={{ result, changeResult, removeResult }}>
      {props.children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
