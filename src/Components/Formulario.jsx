import React, { useState, Fragment } from "react";
import Nombre from "./Nombre";
import Apellido from "./Apellido";
import Email from "./Email";
import Telefono from "./Telefono";
import Password from "./Password";
import Enviar from "./Enviar";

export const Formulario = (props) => {
  return (
    <Fragment>
      <div class="container">
        <br />
        <form>
          <Nombre /> <br />
          <Apellido /> <br />
          <Email /> <br />
          <Telefono /> <br />
          <Password /> <br />
          <Password /> <br />
          <Enviar />
        </form>
      </div>
    </Fragment>
  );
};

export default Formulario;
