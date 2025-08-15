import axios from "axios";
const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://16.171.113.19:8800"
        : "http://localhost:3000";

const client = axios.create({ baseURL });
export default client;
