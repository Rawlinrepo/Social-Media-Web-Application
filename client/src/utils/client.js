import axios from "axios";
const baseURL =
    process.env.NODE_ENV === "production"
        ? "http://51.20.134.254:8800"
        : "http://51.20.134.254:8800";

const client = axios.create({ baseURL });
export default client;
