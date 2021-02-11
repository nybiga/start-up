import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => <Home />} />
          {/* <Route exact path="/register" render={() => <Register />} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
