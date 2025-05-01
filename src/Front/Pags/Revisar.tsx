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
          <Button
            text="Descargar"
            extra="Pestaña para descargar elementos subidos"
            href="Descargar"
          />
          <ButtonPresed text="Revisar" />
        </nav>
      </header>
    </>
  );
};

export default Descargar;
