export const getemail = () => {
    const userStr = sessionStorage.getItem("email");
    if (userStr) return JSON.parse(userStr);
    else return null;
}
export const setUserSession = () => {
}
export const removeUserSession = () => {
}