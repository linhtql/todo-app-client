import axios from "axios";

const client = axios.create({
  baseURL: "https://todo-app-backend-linh-tran.vercel.app/api",
});

export default client;
