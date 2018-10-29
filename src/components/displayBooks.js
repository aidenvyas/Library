import React from "react";
import Modal from "../components/modal";

const books = props => {
  return (
    <div>
      <h3>BOOKS LIST:</h3>
      <hr />
      {props.books.map(book => {
        return (
          <div
            className="card"
            style={{ width: "18rem", display: "inline-block" }}
            key={book.id}
          >
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
              <p className="card-text">{book.language}</p>
              <button
                className="btn btn-success"
                onClick={() => props.handletoggle(false, book)}
              >
                View Details
              </button>
            </div>
          </div>
        );
      })}
      <Modal
        modal={props.modalopen}
        content={props.modalcontent}
        toggle={props.handletoggle}
      />
    </div>
  );
};

export default books;
