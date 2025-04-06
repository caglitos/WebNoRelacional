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
          <Button text="Editar" href="Editar" />
          <Button text="Descargar" href="Descargar" />
          <ButtonPresed text="Revisar" />
        </nav>
      </header>
    </>
  );
};

export default Descargar;
