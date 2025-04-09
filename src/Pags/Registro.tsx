import React, { useState } from "react";
import Button from "../components/ButtonRedirect";
import ButtonPresed from "../components/ButonPresed";
import Campo from "../components/CampoAdd";
import ButtonAdd from "../components/ButtonAdd";
import subir from "./assets/subir.svg"

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
          <Button text="Eliminar" href="Eliminar" />
          <Button text="Editar" href="Editar" />
          <Button text="Descargar" href="Descargar" />
          <Button text="Revisar" href="Revisar" />
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
