import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://nodemailer.rahulluthra.in", // Vite proxy will forward this to http://localhost:5000
  headers: {
    "Content-Type": "application/json",
  },
});

export default customFetch;
