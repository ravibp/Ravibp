import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import "assets/scss/material-kit-react.scss?v=1.7.0";

// route pages
import LandingPage from "myComponents/LandingPage.jsx";
import ResumeBuild from "myComponents/ResumeBuild.jsx";

ReactDOM.render(
  <HashRouter basename='/'>
    <Switch>
      <Route
        exact path="/"
        component={LandingPage}
      />
      <Route
        path="/resume"
        component={ResumeBuild}
      />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
