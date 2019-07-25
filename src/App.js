import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./scenes/Home";
import Techniques from "./scenes/Techniques";
import Fighter from "./scenes/Fighter";
import DailySummary from "./scenes/DailySummary";
import Videos from "./scenes/Videos";
import Error404 from "./scenes/Error404";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/techniques" exact component={Techniques} />
            <Route path="/fighters/:id" exact component={Fighter} />
            <Route path="/daily-summary" exact component={DailySummary} />
            <Route path="/videos" exact component={Videos} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
