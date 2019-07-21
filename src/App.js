import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { hot } from "react-hot-loader";
import Landing from "./components/Layout/Landing";
import "./css/Common.css";
import "./css/MediaQueries.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Landing} />
        </Router>
      </Provider>
    );
  }
}
export default hot(module)(App);
