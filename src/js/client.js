import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Hovers from "./pages/Hovers";
import Transitions from "./pages/Transitions";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

// Initialize Foundation
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="transitions" name="transitions" component={Transitions}></Route>
      <Route path="hovers" name="hovers" component={Hovers}></Route>
    </Route>
  </Router>,
app);
