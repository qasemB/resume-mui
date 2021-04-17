import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RTL from "./components/Layouts/RTL";
import ThemeMUI from "./components/Layouts/ThemeMUI";

ReactDOM.render(
  <ThemeMUI>
    <RTL>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RTL>
  </ThemeMUI>,
  document.getElementById("root")
);
