import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/store";
import Display from "../components/displayBooks";
class Books extends Component {
  render() {
    console.log(store.getState());
    // if (this.props.show) {
    //   var search = (
    //     <Display
    //       books={this.props.results}
    //       handletoggle={this.props.handlestrapmodal}
    //       modalopen={this.props.modalopen}
    //       modalcontent={this.props.modalcontent}
    //     />
    //   );
    // } else {
    //   var book = (
    //     <Display
    //       books={this.props.booksList}
    //       handletoggle={this.props.handlestrapmodal}
    //       modalopen={this.props.modalopen}
    //       modalcontent={this.props.modalcontent}
    //     />
    //   );
    // }

         const books = (
          <Display
            books={this.props.booksList}
            handletoggle={this.props.handlestrapmodal}
            modalopen={this.props.modalopen}
            modalcontent={this.props.modalcontent}
          />
        );

    return (
      <div>
        <div>{books}</div>
        <div>
          <form
            onSubmit={event =>
              this.props.handleSubmit(event, this.props.searchValue)
            }
          >
          </form>
            <input
              value={this.props.searchValue}
              onChange={this.props.handleInputChange}
            />
        </div>
        {/* <div>{book}</div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    booksList: state.books,
    searchValue: state.searchValue,
    results: state.results,
    show: state.showToggle,
    modalopen: state.modalopen,
    modalcontent: state.modalcontent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // handleInputChange: event => {
    //   const action = { type: "INPUTCHANGE", value: event.target.value };
    //   dispatch(action);
    // },
    handleInputChange: event => {
      console.log(event);
      const action = { type: "SUBMIT", value: event.target.value };
      dispatch(action);
    },
    // handleSubmit: (event, inp) => {
    //   event.preventDefault();
    //   const action = { type: "SUBMIT", value: inp };
    //   dispatch(action);
    // },


    handlestrapmodal: (status, book) => {
      const action = { type: "MODAL", value: { book, status } };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
