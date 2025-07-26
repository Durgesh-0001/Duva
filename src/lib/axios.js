import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8000/api"
      : "https://duva-backend-2.onrender.com/api", // hardcoded production URL
  withCredentials: true,
});