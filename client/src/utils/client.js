import axios from "axios";
const baseURL =
    process.env.NODE_ENV === "production"
        ? "http://16.16.182.24:8800"
        : "http://16.16.182.24:8800";

const client = axios.create({ baseURL });
export default client;
