import axios from "axios";
import config from "../config/config.json"

export default async function doctorAdviceByBodyArea(params) {
  
  try {
    let resp = await axios.post(`${config.backend_url}/doctorAdviceByBodyArea`, params);
    return resp.data;
  } catch (err) {
    return false
    }
}