import axios from "axios";

const API = axios.create({
  baseURL: "https://airbnb-clone-backend-tq5h.onrender.com/api",
});

export default API;