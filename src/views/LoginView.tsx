import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorsMessage from "../components/ErrorsMessage";
import type { LoginForm } from "../types";
import api from "../config/axios";
import { toast } from "sonner";
import { isAxiosError } from "axios";

export default function LoginView() {
  const initalValues : LoginForm = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initalValues });

  const handleLogin = async (formData : LoginForm) => {
    try {
      const {data} = await api.post(`/auth/login`, formData);
      toast.success(data)
    } catch (error) {
      if(isAxiosError(error) && error.response) {
        toast.error(error.response?.data.error);
      }
    }
  };

  return (
    <>
      <h1 className=" text-4xl font-bold text-white">Inicar sesion</h1>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
        noValidate
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && <ErrorsMessage>{errors.email.message}</ErrorsMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
          {errors.password && (
            <ErrorsMessage>{errors.password.message}</ErrorsMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Iniciar Sesión"
        />
      </form>

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
