import axios from "axios";
const baseURL = 
    process.env.NODE_ENV === "production"
        ? "http://13.61.151.198:8800"
        : "http://13.61.151.198:8800";

const client = axios.create({ baseURL });
export default client;
