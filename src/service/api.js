import axios from "axios";



export const getUsers=async ()=> {
    const url='http://localhost:8080/test/hello/getusers';
    return await axios.get(url);
}

// export const addUsers = async(user) =>{
//     return await axios.post(url,user);
// }
 
export const getUsersById=async (id)=> {
    const url='http://localhost:8080/test/hello/getusers'+id;
    return await axios.get(url);
}

export const updateUser= async (id,user) => {
    const url='http://localhost:8080/test/hello/update'+id;
    return await axios.put(url,user);
}

export const deleteUser = async(id)=> {
    const url='http://localhost:8080/test/hello/delete'+id;
   return await axios.delete(url)
}
