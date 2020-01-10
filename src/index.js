import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const Application = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
