import React from "react";
import Button from "../components/ButtonRedirect";
import ButtonPresed from "../components/ButonPresed";

const Descargar: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Button
            text="Registro"
            extra="Pestaña para suibir los elementos"
            href="Registro"
          />
          <Button
            text="Eliminar"
            extra="Pestaña para eliminar elementos subidos"
            href="Eliminar"
          />
          <Button
            text="Editar"
            extra="Pestaña para actualizar elementos subidos"
            href="Editar"
          />
          <ButtonPresed text="Descargar" />
          <Button
            text="Revisar"
            extra="Pestaña para ver los elementos subidos"
            href="Revisar"
          />
        </nav>
      </header>
    </>
  );
};

export default Descargar;
