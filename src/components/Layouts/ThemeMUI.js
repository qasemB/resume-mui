import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: "rgba(10,64,44,1)",
      main: "rgba(7,54,55,1)",
    },
    secondary: {
      light: "#ceb291",
      main: "#c69963",
    },
  },
  typography: {
    fontFamily: "BYekan",
  },
});

const ThemeMUI = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default ThemeMUI;
