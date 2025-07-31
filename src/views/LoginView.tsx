import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <h1 className=" text-4xl font-bold text-white">Inicar sesion</h1>
      <nav className=" mt-10">
        <Link
          className=" text-center text-white text-lg block"
          to="/auth/register"
        >
          Registrarse
        </Link>
      </nav>
    </>
  );
}
