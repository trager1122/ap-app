import axios from "axios";
const BASE_URL = "https://mobile.admissionpros.com/api";

export default axios.create({
  baseURL: BASE_URL,
});
