import axios from "axios";

const myAxios = axios.create({
    baseURL: "https://fakestoreapi.com/"
})

export default myAxios