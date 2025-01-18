import { Login } from "../components/Login";
import { Nav } from "../components/Nav";

export const Buscar = () => {
  return (
    <div className="flex p-3 mb-56">
      <Login />
      <div className="pl-4 py-6">
        <h1 className="text-UP-COLOR2 text-[26px] border-b-2 border-UP-COLOR2 mb-4">BUSCAR</h1>
        <p className="text-[#666666] text-[14px]">
          Puede buscar los cursos en el catálogo de cursos o buscar las
          secciones del curso disponibles para un año, periodo y sesión
          específico. Después autenticarse en el sistema, puede buscar personas
          en los directorios en línea a los que tiene acceso.
        </p>
      </div>
    </div>
  );
};
