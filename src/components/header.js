import React from "react";

const header = props => {
   return (
    <div className="container">
      <form onSubmit={props.onsubmit}>
        <label>
          Enter UserName:
          <input name="username" onChange={props.onchange} /> <hr />
          Enter Password:
          <input type="password" name="password" onChange={props.onchange} />
          <hr />
          <button type="submit"> LOGIN!</button>
          <button type="submit" onClick={props.logout}> LOGOUT!</button>
        </label>
      </form>
    </div>
  );
};

export default header;
