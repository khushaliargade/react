import axios from "axios";


//for fetch the data in table
export const getUsers = async () => {
    const url = 'http://localhost:8080/test/hello/getusers';
    return await axios.get(url);
}

// export const addUsers = async(user) =>{
//     return await axios.post(url,user);
// }

//for onclick of update button we get user details
export const getUsersById = async (sid) => {
    const url = 'http://localhost:8080/test/hello/getusers/' + sid;
    return await axios.get(url);
}
//for update user
export const updateUser = async (sid,user) => {
    const url = 'http://localhost:8080/test/hello/update/'+{sid};
    return await axios.put(url,user);
}
//for delete user
export const deleteUser = async (sid) => {
    const url = 'http://localhost:8080/test/hello/delete/'+sid;
    return await axios.delete(url)
}
