import axios from "axios";

// Create axios instance with base URL pointing to backend
const testApi = axios.create({
  baseURL: "https://fullstack-testing-backend.onrender.com/api", // <-- NO +, NO %20
});

// Optional: future auth
testApi.interceptors.request.use((config) => {
  // const user = JSON.parse(localStorage.getItem("user"));
  // if (user?.accessToken) {
  //   config.headers.Authorization = `Bearer ${user.accessToken}`;
  // }
  return config;
});

export default testApi;
