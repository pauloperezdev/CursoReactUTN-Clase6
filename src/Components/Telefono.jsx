import React, { useState, Fragment } from "react";

export const Telefono = (props) => {
  return (
    <Fragment>
      <div className="form-group">
        <label for="Telefono">Telefono </label>
        <input
          type="text"
          className="form-control"
          id="Telefono"
          aria-describedby="TelefonoHelp"
          placeholder="Ingrese su Telefono"
        />
      </div>
    </Fragment>
  );
};

export default Telefono;
