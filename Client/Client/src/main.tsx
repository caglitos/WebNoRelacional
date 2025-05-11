import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Revisar,
  Descargar,
  Registro,
  Editar,
  Eliminar,
} from "./Front/components/Pags";
import "./Front/index.css";
import "./Front/keyframes.css";

function paguina() {
  const page = new URLSearchParams(window.location.search).get("page");

  switch (page) {
    case "Registro":
      return <Registro />;
    case "Eliminar":
      return <Eliminar />;
    case "Editar":
      return <Editar />;
    case "Descargar":
      return <Descargar />;
    case "Revisar":
      return <Revisar />;
    default:
      return <Registro />;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{paguina()}</StrictMode>
);
