import React, { useState } from "react";
import Button from "../components/ButtonRedirect";
import ButtonPresed from "../components/ButonPresed";
import Campo from "../components/CampoAdd";
import ButtonAdd from "../components/ButtonAdd";

const Registro: React.FC = () => {
  const [campos, setCampos] = useState([Date.now()]); // IDs únicos

  const agregarCampo = () => {
    setCampos([...campos, Date.now()]);
  };

  const eliminarCampo = (id: number) => {
    setCampos(campos.filter((c) => c !== id));
  };

  return (
    <>
      <header>
        <nav>
          <ButtonPresed text="Registro" />
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
          <ButtonAdd onClick={agregarCampo} classN="AddCampo" />
          <button className="BtnA AddCampo">Subir</button>
        </div>
      </main>
    </>
  );
};

export default Registro;
