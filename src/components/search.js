import React from "react";

const search = props => {
  return (
    <div>
      <h3> SEARCH RESULTS:</h3>
      <div>
        {props.results.map(book => {
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
    </div>
  );
};

export default search;
