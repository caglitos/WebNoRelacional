import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Registro from "./Front/Pags/Registro";
import Eliminar from "./Front/Pags/Eliminar";
import Editar from "./Front/Pags/Editar";
import Descargar from "./Front/Pags/Descargar";
import Revisar from "./Front/Pags/Revisar";
import "./Front/index.css";

function paguina() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  console.log(page);

  let contenido;
  switch (page) {
    case "Registro":
      contenido = <Registro />;
      break;
    case "Eliminar":
      contenido = <Eliminar />;
      break;
    case "Editar":
      contenido = <Editar />;
      break;
    case "Descargar":
      contenido = <Descargar />;
      break;
    case "Revisar":
      contenido = <Revisar />;
      break;
    default:
      contenido = <Registro />;
  }

  return contenido;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{paguina()}</StrictMode>
);
