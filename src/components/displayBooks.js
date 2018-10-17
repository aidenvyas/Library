import React from "react";
import Details from "../components/details";
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
          >
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
              <p className="card-text">{book.language}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default books;
