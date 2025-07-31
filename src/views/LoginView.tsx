import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <nav>
        <Link to="/auth/register">Registrarse</Link>
      </nav>
    </>
  );
}
