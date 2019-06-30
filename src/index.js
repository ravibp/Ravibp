import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "myComponents/LandingPage.jsx";
import ResumeBuild from "myComponents/ResumeBuild.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact={true} path="/" component={LandingPage} />
      <Route path="/resume" component={ResumeBuild} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
