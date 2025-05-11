import React from "react";
import { useState } from "react";
import Button from "./ButtonRedirect";
import ButtonPresed from "./ButonPresed";
import Campo from "./CampoAdd";
import ButtonAdd from "./ButtonAdd";

export const Registro: React.FC = () => {
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

export const Eliminar: React.FC = () => {
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

export const Editar: React.FC = () => {
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
          <ButtonPresed text="Editar" />
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
    </>
  );
};

export const Descargar: React.FC = () => {
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

export const Revisar: React.FC = () => {
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
