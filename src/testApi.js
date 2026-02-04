import axios from "axios";

// Create axios instance with base URL
const testApi = axios.create({
  baseURL: "https://fullstack-testing-backend.onrender.com/api", // your deployed backend
});

// Example: optional request interceptor (no auth needed now)
testApi.interceptors.request.use((config) => {
  // For future: if you add auth
  // const user = JSON.parse(localStorage.getItem("user"));
  // if (user?.accessToken) {
  //   config.headers.Authorization = `Bearer ${user.accessToken}`;
  // }
  return config;
});

export default testApi;
