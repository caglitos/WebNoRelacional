import React from "react";
import Button from "./Button";
import ButtonPresed from "./ButonPresed";

const Nav: React.FC = () => {
  return (
    <nav>
      <ButtonPresed text="Registro"></ButtonPresed>
      <Button text="Eliminar"></Button>
      <Button text="Editar"></Button>
      <Button text="Descargar"></Button>
      <Button text="Revisar"></Button>
    </nav>
  );
};

export default Nav;
