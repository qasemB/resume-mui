import { CssBaseline } from "@material-ui/core";
import React from "react";
import { Route } from "react-router";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </div>
  );
}

export default App;
