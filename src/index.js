import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

import "./components/sass/main.scss";

const Application = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
