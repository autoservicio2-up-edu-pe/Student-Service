import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const inicio = [
    "Carrito",
    "Planes de Estudio",
    "Solicitud de informacion",
    "Aplicar",
    "Donar",
    "Consulta de Convalidaciones",
    "Consultar Datos del Alumno",
  ];
  const buscar = ["Catalogo de Cursos", "Cursos ofertados"];

  const [navOption, setNavOption] = useState(inicio);
  const [active, setActive] = useState("inicio");

  const handleOption = (option) => {
    if (option == "inicio") {
      setNavOption(inicio);
      setActive("inicio");
    } else if (option == "buscar") {
      setNavOption(buscar);
      setActive("buscar");
    }
  };

  return (
    <nav className="">
      <div className="bg-UP-COLOR h-20 flex items-center p-1">
        <img
          src="https://autoservicio2.up.edu.pe/ss/App_Themes/UPResponsive/Images/logo_up.png"
          className="h-3/5 mx-5"
        />
      </div>

      <div className="bg-UP-COLOR2 text-white flex text-xs">
        <Link
          to="/"
          className={`p-2 py-3 hover:bg-UP-COLOR3 ${
            active === "inicio" ? "bg-UP-COLOR3" : ""
          }`}
          onClick={() => handleOption("inicio")}
        >
          Inicio
        </Link>
        <Link
          to="/Search"
          className={`p-2 py-3 hover:bg-UP-COLOR3 ${
            active === "buscar" ? "bg-UP-COLOR3" : ""
          }`}
          onClick={() => handleOption("buscar")}
        >
          Buscar
        </Link>
      </div>

      <div className="flex text-white bg-UP-COLOR3 text-xs">
        {navOption.map((option, index) => (
          <a key={index} className="p-2 py-3 hover:underline" href="">
            {option}
          </a>
        ))}
      </div>
    </nav>
  );
};
