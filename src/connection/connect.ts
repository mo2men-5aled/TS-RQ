import axios from "axios";

// baseURL: localhost:4000
const instance = axios.create({
  baseURL: "http://localhost:4000",
});

// export instance
export default instance;
