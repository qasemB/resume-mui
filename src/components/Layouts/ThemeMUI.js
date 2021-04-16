import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: "rgba(7,54,55,1)",
      main: "rgba(5,36,37,1)",
      dark: "rgba(5,36,37,0.6)",
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
