import React from "react";
import Button from "../components/Button";
import ButtonPresed from "../components/ButonPresed";

const App: React.FC = () => {
  return (
    <header>
      <nav>
        <Button text="Registro" href="Registro" />
        <ButtonPresed text="Eliminar" />
        <Button text="Editar" href="Editar" />
        <Button text="Descargar" href="Descargar" />
        <Button text="Revisar" href="Revisar" />
      </nav>
    </header>
  );
};

export default App;
