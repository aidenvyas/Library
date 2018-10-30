import React, { Component } from "react";
import "./App.css";
import Books from "./components/books";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/header";
import { connect } from "react-redux";
import axios from "axios";

class App extends Component {
  componentDidUpdate() {
    if (this.props.submitted) {
      axios
        .post("http://localhost:3001/user/login", {
          username: this.props.username,
          password: this.props.password
        })
        .then(response => {
          this.props.handleToken(response.data.token);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    console.log(store.getState(), "STORE");

    return (
      <div className="App">
        <div>
          <Header
            onchange={this.props.handleInputChange}
            onsubmit={this.props.handleSubmit}
          />
        </div>
        <hr />
        <div>
          <Books />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    username: state.username,
    password: state.password,
    submitted: state.submit
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
