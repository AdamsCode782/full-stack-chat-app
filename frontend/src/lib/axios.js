import axios from "axios";

const DEV = import.meta.env.MODE === "development";
const PROD_URL = "https://full-stack-chat-app-rm9v.onrender.com";

export const axiosInstance = axios.create({
  baseURL: DEV ? "http://localhost:5001/api" : `${PROD_URL}/api`,
});

// automatically attach JWT
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
