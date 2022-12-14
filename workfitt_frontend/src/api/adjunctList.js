import axios from "axios";
import config from "../config/config.json"

export default async function adjunctList() {
  
  try {
    let resp = await axios.get(`${config.backend_url}/adjunctList?sortBy=app`);
    return resp.data;
  } catch (err) {
    return false
    }
}