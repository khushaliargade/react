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
export const getUsersById = async (id) => {
    const url = 'http://localhost:8080/test/hello/getusers/' + id;
    return await axios.get(url);
}
//for update user
export const updateUser = async (id, user) => {
    const url = 'http://localhost:8080/test/hello/update/' + id;
    return await axios.put(url, user);
}
//for delete user
export const deleteUser = async (id) => {
    const url = 'http://localhost:8080/test/hello/delete/' + id;
    return await axios.post(url, {
        mode: 'no-cors',
        headers: {
            "access-control-allow-origin": "*",
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}
