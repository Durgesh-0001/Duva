import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8000/api"
      : "https://duva-backend-production.up.railway.app/api",
  withCredentials: true,
});
