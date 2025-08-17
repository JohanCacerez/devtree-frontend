import { isAxiosError } from "axios";
import api from "../config/axios";
import type { User } from "../types";


//Funcion para obtener el usuario
export async function getUSer() {
  try {
    // Realiza la solicitud a la API para obtener el usuario
    const { data } = await api<User>("/user");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}
