import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/components/Login";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <HomePage />
    </>
  );
}

export default App;
