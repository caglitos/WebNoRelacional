import { useState } from "react";
import ButtonAdd from "./ButtonAdd";
import ButtonD from "./ButtonDel";

function Campo() {
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
    <div>
      <section>
        {/* Input Clave */}
        <input type="text" placeholder="Clave" />

        {/* Primer input de Valor con botón de agregar */}
        <div className="input-con-boton">
          <input
            type="text"
            placeholder="Valor"
            value={valores[0]}
            onChange={(e) => actualizarValor(0, e.target.value)}
          />
          <div className="boton">
            <ButtonAdd onClick={agregarValor} />
          </div>
        </div>

        {/* Valores extra con botón eliminar */}
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
    </div>
  );
}

export default Campo;
