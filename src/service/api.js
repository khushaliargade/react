import axios from "axios";


const url='http://localhost:8080/test/hello/getusers';

export const getUsers=async ()=> {
    return await axios.get(url);
}

