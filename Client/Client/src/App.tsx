import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Inicio,
  Perfil,
  Login,
  Registrar,
  Agregar,
  Revisar,
  Cantget,
} from "./components/Pags";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<Cantget />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/Agregar" element={<Agregar />} />
        <Route path="/Revisar" element={<Revisar />} />
      </Routes>
    </BrowserRouter>
  );
};
