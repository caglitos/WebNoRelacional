import React from "react";
import Button from "../components/Button";
import ButtonPresed from "../components/ButonPresed";
import Campo from "../components/Campo";

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ButtonPresed text="Registro" />
          <Button text="Eliminar" href="Eliminar" />
          <Button text="Editar" href="Editar" />
          <Button text="Descargar" href="Descargar" />
          <Button text="Revisar" href="Revisar" />
        </nav>
      </header>

      <main>
        <Campo />
      </main>
    </>
  );
};

export default App;
