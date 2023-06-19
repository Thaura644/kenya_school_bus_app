import axios from "axios";

const config = axios.create({
    baseURL: `http://${`10.1.131.2:8069`}`,
    timeout: 1000,
  });
  
export default config;