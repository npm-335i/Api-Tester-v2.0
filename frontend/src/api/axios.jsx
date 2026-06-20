import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;