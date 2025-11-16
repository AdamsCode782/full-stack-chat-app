import axios from "axios";

const DEV = import.meta.env.MODE === "development";

//RENDER
const PROD_URL = "https://full-stack-chat-app-rm9v.onrender.com";

export const axiosInstance = axios.create({
  baseURL: DEV ? "http://localhost:5001/api" : `${PROD_URL}/api`,
  withCredentials: true,
});
