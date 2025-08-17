import { isAxiosError } from "axios";
import api from "../config/axios";


//Funcion para obtener el usuario
export async function getUSer() {
  try {
    // Realiza la solicitud a la API para obtener el usuario
    const { data } = await api("/user");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}
