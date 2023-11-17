import React, { useState, Fragment } from "react";

export const Apellido = (props) => {
  return (
    <Fragment>
      <div className="form-group">
        <label for="Apellido">Apellido </label>
        <input
          type="text"
          className="form-control"
          id="Apellido"
          aria-describedby="apellidoHelp"
          placeholder="Ingrese su apellido"
        />
      </div>
    </Fragment>
  );
};

export default Apellido;
