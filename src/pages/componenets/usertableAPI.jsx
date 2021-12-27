import axios from "axios";
const url="http://localhost:8083/test/hello/getusers";
export const getUsers=()=>{
    return await axios.get(url);
}