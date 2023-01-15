import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.1.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

import LandingPage from "views/examples/LandingPage.js";
import Error404 from "views/examples/Error404.js";
import Error500 from "views/examples/Error500.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <LandingPage {...props} />} />
      <Route path="/404-error" render={(props) => <Error404 {...props} />} />
      <Route path="/500-error" render={(props) => <Error500 {...props} />} />
      <Redirect from="/" to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
