import axios from "axios";

const config = axios.create({
    baseURL: `http://${`94.72.116.185:8000`}`,
    timeout: 1000,
  });
  
export default config;