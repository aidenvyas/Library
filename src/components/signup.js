import React from "react";

const signup = props => {
  return (
    <div className="container">
      <form onSubmit={props.signup}>
        <label>
          Name: <input name="username" onChange={props.onchange} />
          email: <input name="email" onChange={props.onchange} />
          password:
          <input type="password" name="password" onChange={props.onchange} />
          Confirm password:
          <input type="password" name="cnfpwd" onChange={props.onchange} />
          <button> Signup </button>
        </label>
      </form>
    </div>
  );
};




export default signup;
