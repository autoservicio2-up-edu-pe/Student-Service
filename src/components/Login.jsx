export const Login = () => {
  return (
    <div className="flex flex-col w-[220px]">
      <form className="flex flex-col">
        <h2 className="border-b-2 border-UP-COLOR2 text-xl mb-4">Acceso</h2>
        <span>Usuario</span>
        <input type="text" className="border-2 border-UP-COLOR2" />
        <span>Contraseña</span>
        <input type="password" className="border-2 border-UP-COLOR2" />
        <button>Acceso</button>
      </form>
      <a href="">¿Olvidó su contraseña?</a>
      <a href="">Cambiar Contraseña</a>
      <a href="">¿Olvidó su Usuario?</a>
    </div>
  );
};
