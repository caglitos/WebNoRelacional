import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Registro,
  Eliminar,
  Editar,
  Descargar,
  Revisar,
  Cantget,
} from "./components/Pags";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cantget />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Eliminar" element={<Eliminar />} />
        <Route path="/Editar" element={<Editar />} />
        <Route path="/Descargar" element={<Descargar />} />
        <Route path="/Revisar" element={<Revisar />} />
        <Route path="*" element={<Cantget />} />
      </Routes>
    </BrowserRouter>
  );
};
