import axios from "axios";

let baseUrl = process.env.NODE_ENV === "production" ? "" : "http://localhost:4800"

export default axios.create({
    baseURL: baseUrl + "/api/v1/restaurants"
})