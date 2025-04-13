import React from "react";
import Button from "../components/ButtonRedirect";
import ButtonPresed from "../components/ButonPresed";

const Descargar: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Button text="Registro" href="Registro" />
          <Button text="Eliminar" href="Eliminar" />
          <ButtonPresed text="Editar" />
          <Button text="Descargar" href="Descargar" />
          <Button text="Revisar" href="Revisar" />
        </nav>
      </header>
    </>
  );
};

export default Descargar;
