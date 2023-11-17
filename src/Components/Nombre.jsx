import React, { useState, Fragment } from "react";

export const Nombre = (props) => {
  return (
    <Fragment>
      <div className="form-group">
        <label for="Nombre">Nombre </label>
        <input
          type="text"
          className="form-control"
          id="Nombre"
          aria-describedby="nombreHelp"
          placeholder="Ingrese su Nombre"
        />
      </div>
    </Fragment>
  );
};

export default Nombre;
