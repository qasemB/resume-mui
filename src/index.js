import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RTL from "./components/Layouts/RTL";
import ThemeMUI from "./components/Layouts/ThemeMUI";

ReactDOM.render(
  <React.StrictMode>
    <ThemeMUI>
      <RTL>
        <App />
      </RTL>
    </ThemeMUI>
  </React.StrictMode>,
  document.getElementById("root")
);
