import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/store";
import Search from "./search";
import Display from "../components/displayBooks";
class Books extends Component {
  render() {
    console.log(store.getState());
    if (this.props.show) {
      var search = <Search results={this.props.results} />;
    } else {
      var book = <Display books={this.props.booksList} />;
    }
    return (
      <div>
        <div>{search}</div>
        <div>
          <form
            onSubmit={event =>
              this.props.handleSubmit(event, this.props.searchValue)
            }
          >
            <input
              value={this.props.searchValue}
              onChange={this.props.handleInputChange}
            />
          </form>
        </div>
        <div>{book}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    booksList: state.books,
    searchValue: state.searchValue,
    results: state.results,
    show: state.showToggle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: event => {
      const action = { type: "INPUTCHANGE", value: event.target.value };
      dispatch(action);
    },
    handleSubmit: (event, inp) => {
      event.preventDefault();
      console.log("submit");

      const action = { type: "SUBMIT", value: inp };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
