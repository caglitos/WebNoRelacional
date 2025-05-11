import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Revisar,
  Descargar,
  Registro,
  Editar,
  Eliminar,
  Cantget,
} from "./components/Pags";
import "./index.css";
import "./keyframes.css";
import App from "./App";

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
      return <Cantget />;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{App()}</StrictMode>
);
