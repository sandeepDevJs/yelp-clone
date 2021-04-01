import axios from "axios";

let baseUrl = process.env.NODE_ENV === "production" ? "" : "http://localhost:4800"

export default axios.create({
    baseURL: baseUrl +process.env.REACT_APP_API_BASE_URL+"/restaurants"
})