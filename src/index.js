import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";


import LandingPage from "views/LandingPage.js";
import Error404 from "views/Error404.js";
import Error500 from "views/Error500.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <LandingPage {...props} />} />
      <Route path="/404-error" render={(props) => <Error404 {...props} />} />
      <Route path="/500-error" render={(props) => <Error500 {...props} />} />
      <Redirect from="/" to="/presentation" />
    </Switch>
  </BrowserRouter>,
);
