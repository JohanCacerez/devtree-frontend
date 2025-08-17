import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
    // Agrega el token de autorización a la cabecera
    const token = localStorage.getItem("AUTH_TOKEN");
    // Verifica si el token existe
    if(token) {
        // Agrega el token a la cabecera de autorización
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});


export default api;
