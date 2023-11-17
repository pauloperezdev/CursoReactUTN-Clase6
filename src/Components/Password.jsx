import React, { useState, Fragment } from "react";

export const Password = (props) => {
  return (
    <Fragment>
      <div className="form-group">
        <label for="Password">Password </label>
        <input
          type="password"
          className="form-control"
          id="Password"
          aria-describedby="PasswordHelp"
          placeholder="Ingrese su Password"
        />
      </div>
    </Fragment>
  );
};

export default Password;
