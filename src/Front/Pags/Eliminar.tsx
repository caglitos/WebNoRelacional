import React, { useState } from "react";
import Button from "../components/ButtonRedirect";
import ButtonPresed from "../components/ButonPresed";
import Campo from "../components/CampoDel";

const Eliminar: React.FC = () => {
  const [campos, setCampos] = useState([Date.now()]); // IDs únicos

  const eliminarCampo = (id: number) => {
    setCampos(campos.filter((c) => c !== id));
  };

  return (
    <>
      <header>
        <nav>
          <Button
            text="Registro"
            extra="Pestaña para suibir los elementos"
            href="Registro"
          />
          <ButtonPresed text="Eliminar" />
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
          <Button
            text="Revisar"
            extra="Pestaña para ver los elementos subidos"
            href="Revisar"
          />
        </nav>
      </header>

      <main>
        {campos.map((id) => (
          <Campo key={id} onDelete={() => eliminarCampo(id)} />
        ))}

        {/* Contenedor de botones finales */}
        <div className="botones-finales">
          <button className="BtnA DelCampo">Eliminar</button>
        </div>
      </main>
    </>
  );
};

export default Eliminar;
