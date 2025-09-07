import React from "react";
import { useState } from "react";
import Button from "./ButtonRedirect";
import ButtonPresed from "./ButonPresed";
import Campo from "./CampoAdd";
import ButtonAdd from "./ButtonAdd";
import Article from "./Article";

export const Inicio: React.FC = () => {
  return (
    <>
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
            paddingTop: "0vh",
            marginTop: "1.5vh",
          }}
        >
          <div className="mountain">Mountain DB</div>
          <Button
            text="Registro"
            href="Agregar"
            styles={{
              left: "3vw",
            }}
          />
          <Button
            text="Revisar"
            href="Revisar"
            styles={{
              left: "-1vw",
            }}
          />
        </nav>
      </header>
      <main className="home">
        <Article
          title="¿Qué es esto?"
          content="Esta es una página web que utiliza una base de datos NoSQL de tipo documental para almacenar y gestionar información sobre todo tipo de cosas que no sigan una estructura fija."
          content2="Esta web fue creada por alumnos del CBTis142 como parte de un proyecto escolar, y está diseñada para ser un ejemplo de cómo se puede utilizar una base de datos NoSQL para almacenar información de manera flexible."
          image="./assets/MongoDB.svg"
          alt=""
          classNameImg="mongo"
        />
        <Article
          title="¿Qué es una base de datos NoSQL?"
          content="Una base de datos NoSQL es un sistema de gestión de bases de datos que no utiliza el modelo relacional tradicional. En su lugar, permite almacenar datos en formatos flexibles como documentos, clave-valor, columnas o grafos."
          image="./assets/Logo.svg"
          alt=""
          classNameImg="Logo"
        />
      </main>
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
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="mountain">Mountain DB</div>
          <ButtonPresed text="Registro" />
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

export const Revisar: React.FC = () => {
  return (
    <>
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
          }}
        >
          <div className="mountain">Mountain DB</div>
          <Button
            text="Registro"
            href="Agregar"
            styles={{
              left: "3vw",
            }}
          />
          <ButtonPresed
            text="Revisar"
            styles={{
              left: "-1vw",
            }}
          />
        </nav>
      </header>
      <body>
        <main></main>
      </body>
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
