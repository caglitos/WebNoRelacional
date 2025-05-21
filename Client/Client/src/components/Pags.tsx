import React from "react";
import { useState } from "react";
import Button from "./ButtonRedirect";
import ButtonPresed from "./ButonPresed";
import Campo from "./CampoAdd";
import ButtonAdd from "./ButtonAdd";

export const Inicio: React.FC = () => {
  return (
    <>
      <h1>Bienvenido a la página de inicio</h1>
      <p>Esta es la página principal de la aplicación.</p>

      <a
        onClick={() => {
          window.location.href = "/Agregar";
        }}
      >
        Regresar solo
      </a>
    </>
  );
};

export const Perfil: React.FC = () => {
  return <h1>Este es el perfil del usuario.</h1>;
};

export const Login: React.FC = () => {
  return (
    <>
      <main className="Login">
        <form>
          <div className="ProfileImg-LogIn"> </div>
          <h1>E-Mail</h1>
          <div className="input-con-imagen">
            <input type="text" placeholder="     Correo Electrónico" />
            <div className="ProfileImg-mini"></div>
          </div>
          <h1>Contraseña</h1>
          <div className="candado"></div>
          <input type="password" placeholder="Contraseña" />
          <input type="button" value="Iniciar sesión" />
        </form>
      </main>
    </>
  );
};

export const Registrar: React.FC = () => {
  return <h1>Este es el espacio del Register</h1>;
};

export const Agregar: React.FC = () => {
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
            href="Agregar"
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
            href="Agregar"
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
            href="Agregar"
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
            href="Agregar"
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

export const Cantget: React.FC = () => {
  const [timeleft, setTimeleft] = React.useState(5);

  React.useEffect(() => {
    if (timeleft === 0) {
      window.location.href = "/Agregar";
      return;
    }
    const timer = setTimeout(() => {
      setTimeleft(timeleft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeleft]);

  return (
    <section className="ErrorSection">
      <div>
        <h1 className="mensaje">Oops! Te perdiste en la montaña.</h1>
        <h3>
          Quiza la pagina que estas buscando no existe <br />o no se llama asi.
        </h3>
        <h2 className="guia">El guia llega en: 00:00:0{timeleft}</h2>
        <a
          onClick={() => {
            window.location.href = "/Agregar";
          }}
        >
          Regresar solo
        </a>
      </div>
      <div className="Montañista"></div>
      <h1 className="a04">404</h1>
    </section>
  );
};
