import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/store";
import Display from "../components/displayBooks";
import axios from "axios";
const addToFav = (id, token) => {
  console.log(id,"id in ",token,"token in")
  axios
    .post("http://localhost:3001/favourite/?favId="+id,{}, {
      headers: {
        // "Content-Type": "application/json",
        'Authorization':"bearer "+ token
      }
    })
    .then((res) => {
      // if(res)
      if(res.data.error){
        alert(res.data.error)
      }else{
          console.log(res, " in axios")
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
class Books extends Component {
  componentWillMount() {
    var bok;
    axios.get("http://localhost:3001/books").then(res => {
      console.log(res, " books from db");
      bok = res.data;
      this.props.handleBooks(bok);
    });
  }

  render() {
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

    const search = (
      <Display
        books={this.props.booksList}
        handletoggle={this.props.handlestrapmodal}
        modalopen={this.props.modalopen}
        modalcontent={this.props.modalcontent}
        favourite={this.props.handleFavourite}
        token={this.props.token}
      />
    );

    return (
      <div>
        <label>
          <strong>Type To search:</strong>{" "}
          <input
            value={this.props.searchValue}
            onChange={this.props.handleInputChange}
          />
        </label>
        <div>{search}</div>

        {/* <div>
          <form
            onSubmit={event =>
              this.props.handleSubmit(event, this.props.searchValue)
            }
          />
        </div> */}
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
    modalcontent: state.modalcontent,
    id: state.favourite,
    token: state.token,
    apierrors: state.apierrors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFavourite: (id, token) => {
      addToFav(id, token);
      const action = { type: "FAVOURITE", value: id };
      dispatch(action);
    },

    handleBooks: bok => {
      const action = { type: "BOOKS", value: bok };
      dispatch(action);
    },

    handleInputChange: event => {
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
