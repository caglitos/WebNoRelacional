import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Registro from "./components/Registro";
import "./index.css";
import "bootstrap";

const params = new URLSearchParams(window.location.search);

const page = params.get("page");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Registro />
  </StrictMode>
);
