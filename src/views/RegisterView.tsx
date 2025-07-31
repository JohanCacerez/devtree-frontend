import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorsMessage from "../components/ErrorsMessage";

import type { RegisterForm } from '../types'

export default function RegisterView() {
  const initialValues : RegisterForm = {
    name: "",
    email: "",
    handle: "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  // Function to handle form submission
  const handleRegister = (formData : RegisterForm) => {
    console.log(formData);
  };

  const password = watch('password')

  return (
    <>
      <h1 className=" text-4xl font-bold text-white">Crear cuenta</h1>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="name" className="text-2xl text-slate-500">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu Nombre"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("name", {
              required: "El nombre es obligatorio",
            })}
          />
          {errors.name && <ErrorsMessage>{errors.name.message}</ErrorsMessage>}
        </div>
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
              required: "El email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && (
            <ErrorsMessage>{errors.email.message}</ErrorsMessage>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="handle" className="text-2xl text-slate-500">
            Handle
          </label>
          <input
            id="handle"
            type="text"
            placeholder="Nombre de usuario: sin espacios"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("handle", {
              required: "El handle es obligatorio",
            })}
          />
          {errors.handle && (
            <ErrorsMessage>{errors.handle.message}</ErrorsMessage>
          )}
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
              required: "El password es obligatorio",
              minLength: { value: 8, message: "El password debe tener al menos 8 caracteres" }
            })}
          />
          {errors.password && (
            <ErrorsMessage>{errors.password.message}</ErrorsMessage>
          )}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="password_confirmation"
            className="text-2xl text-slate-500"
          >
            Repetir Password
          </label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Repetir Password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password_confirmation", {
              required: "La confirmación del password es obligatoria",
              validate: (value) => value === password || "Los passwords no coinciden"
            })}
          />
          {errors.password_confirmation && (
            <ErrorsMessage>
              {errors.password_confirmation.message}
            </ErrorsMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Crear Cuenta"
        />
      </form>

      <nav className=" mt-10">
        <Link
          className=" text-center text-white text-lg block"
          to="/auth/login"
        >
          Iniciar sesión
        </Link>
      </nav>
    </>
  );
}
