// axiosInstance.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",         // ✅ Use relative path
  withCredentials: true,   // ✅ Allow cookies (e.g. JWT)
});
