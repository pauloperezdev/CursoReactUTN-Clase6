import "./styles.css";
import Formulario from "./Components/Formulario";
import DatosDelUsuario from "./Components/DatosDelUsuario";

export default function App() {
  return (
    <div className="App">
      <h1>Formulario de Registro</h1>
      <h2>Ingrese sus datos:</h2>
      <Formulario />
      <hr />
      <h3>Datos Ingresados</h3>
      <DatosDelUsuario />
    </div>
  );
}
