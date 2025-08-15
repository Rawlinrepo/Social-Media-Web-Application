import axios from "axios";
const baseURL =
    process.env.NODE_ENV === "production"
        ? "http://16.171.113.19:8800"
        : "http://16.171.113.19:8800";

const client = axios.create({ baseURL });
export default client;
