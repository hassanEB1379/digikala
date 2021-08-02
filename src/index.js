import React from "react";
import ReactDOM from "react-dom";
import "assets/styles/index.css";
import App from "./App";
import { IconContext } from "react-icons";

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ size: "1.2em" }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
