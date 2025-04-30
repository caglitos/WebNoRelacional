import { useState } from "react";
import ButtonAdd from "./ButtonAdd";
import ButtonD from "./ButtonDel";

interface CampoProps {
  onDelete: () => void;
}

function Campo({ onDelete }: CampoProps) {
  const [valores, setValores] = useState([""]);

  const agregarValor = () => {
    setValores([...valores, ""]);
  };

  const actualizarValor = (index: number, nuevoValor: string) => {
    const nuevos = [...valores];
    nuevos[index] = nuevoValor;
    setValores(nuevos);
  };

  const eliminarValor = (index: number) => {
    const nuevos = valores.filter((_, i) => i !== index);
    setValores(nuevos);
  };

  return (
    <div className="contenedor-campo">
      <div className="grupo-section">
        <section>
          <input className="clave" type="text" placeholder="Clave" />

          <div className="input-con-boton">
            <input
              type="text"
              placeholder="Valor"
              value={valores[0]}
              onChange={(e) => actualizarValor(0, e.target.value)}
            />
            <div className="boton">
              <ButtonAdd onClick={agregarValor} classN="" />
            </div>
          </div>

          {valores.slice(1).map((valor, index) => (
            <div key={index + 1} className="input-con-boton">
              <input
                type="text"
                placeholder="Valor extra"
                value={valor}
                onChange={(e) => actualizarValor(index + 1, e.target.value)}
              />
              <div className="boton">
                <ButtonD onClick={() => eliminarValor(index + 1)} />
              </div>
            </div>
          ))}
        </section>

        {/* Botón al lado derecho del section */}
        <div className="eliminar-section">
          <ButtonD onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default Campo;
