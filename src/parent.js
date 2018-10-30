import React, { Component } from "react";
import HeaderNav from "./components/headerNav";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import SignUp from "./components/signup";
import App from "./App";

class Parent extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <HeaderNav />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route path="/login" component={Header} />
          <Route path="/books" component={App} />
          <Redirect from="/" to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Parent;
