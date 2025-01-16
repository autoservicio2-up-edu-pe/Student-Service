export const Nav = () => {
  return (
    <nav className="">
      <div className="bg-UP-COLOR h-20 flex items-center p-1">
        <img
          src="https://autoservicio2.up.edu.pe/ss/App_Themes/UPResponsive/Images/logo_up.png"
          className="h-3/5 mx-5"
        />
      </div>
      <div className="bg-UP-COLOR2 text-white flex">
        <a href="" className="px-6 py-2 bg-UP-COLOR3">
          Inicio
        </a>
        <a href="" className="px-6 py-2">
          Buscar
        </a>
      </div>
      <div className="flex text-white bg-UP-COLOR3">
        <a className="px-2 ml-4 py-2" href="">Carrito</a>
        <a className="px-2 py-2" href="">Planes de Estudio</a>
        <a className="px-2 py-2" href="">Solicitud de informacion</a>
        <a className="px-2 py-2" href="">Aplicar</a>
        <a className="px-2 py-2" href="">Donar</a>
        <a className="px-2 py-2" href="">Consulta de Convaliaciones</a>
        <a className="px-2 py-2" href="">Consultar Datos del Alumno</a>
      </div>
    </nav>
  );
};
