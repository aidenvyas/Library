import React, { Component } from "react";
import "./App.css";
import Books from "./components/books";
import { Provider } from "react-redux";
import store from "./store/store";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Header from "./components/header";
import SignUp from "./components/signup";
import HeaderNav from "./components/headerNav";

class App extends Component {
  componentDidUpdate() {
    if (this.props.submitted) {
      axios
        .post("http://localhost:3001/user/login", {
          username: this.props.username,
          password: this.props.password
        })
        .then(response => {
          this.props.history.push("/path");
          this.props.handleToken(response.data.token);
        })
        .catch(error => {
          console.log(error);
        });
    }
    if (this.props.signup) {
      axios
        .post("http://localhost:3001/user/signup", {
          username: this.props.username,
          password: this.props.password,
          email: this.props.email
        })
        .then(resposne => {
          // alert("Thanks for signing Up!");
          console.log("signup done");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    console.log(store.getState(), "STORE");

    return (
      <div className="App">
        <HeaderNav />
        <Switch>
          <Route
            exact
            path="/signup"
            signup={this.props.handleSignup}
            onchange={this.props.handleInputChange}
            component={SignUp}
          />
          <Route
            path="/login"
            onchange={this.props.handleInputChange}
            onsubmit={this.props.handleSubmit}
            logout={this.props.handleLogout}
            component={Header}
          />
          <Route path="/books" component={Books} />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    username: state.username,
    password: state.password,
    submitted: state.submit,
    email: state.email,
    signup: state.signup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: event => {
      const action = {
        type: "INPUTCHANGE",
        value: event.target.value,
        name: event.target.name
      };
      dispatch(action);
    },
    handleSubmit: event => {
      event.preventDefault();
      const action = { type: "FORMSUBMIT" };
      dispatch(action);
    },
    handleToken: token => {
      const action = { type: "TOKEN", value: token };
      dispatch(action);
    },
    handleLogout: () => {
      const action = { type: "LOGOUT" };
      dispatch(action);
    },
    handleSignup: event => {
      event.preventDefault();
      const action = { type: "SIGNUP" };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
