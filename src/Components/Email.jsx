import React, { useState, Fragment } from "react";

export const Email = (props) => {
  return (
    <Fragment>
      <div className="form-group">
        <label for="Email">Email </label>
        <input
          type="email"
          className="form-control"
          id="Email"
          aria-describedby="EmailHelp"
          placeholder="Ingrese su Email"
        />
      </div>
    </Fragment>
  );
};

export default Email;
