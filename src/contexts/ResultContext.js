import React, { useState, createContext } from "react";

export const ResultContext = createContext();

const ResultContextProvider = props => {
  const [result, setResult] = useState("");

  const changeResult = n => {
    setResult(n);
  };

  return (
    <ResultContext.Provider value={{ result, changeResult }}>
      {props.children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
