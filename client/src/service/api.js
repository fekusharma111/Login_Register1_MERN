import axios from "axios";
const URL = "http://localhost:8000";

export const adduser = async (data) => {
  try {
    return await axios.post(`${URL}/register`, data);
  } catch (error) {
    console.log(`Error while calling register user api ${error}`);
  }
};
export const loginuser = async (user, setLoginUser) => {
  try {
    return await axios.post(`${URL}/login`, user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      console.log(res.data.message);
    });
  } catch (error) {
    console.log(`Error while calling login user api ${error}`);
  }
};
