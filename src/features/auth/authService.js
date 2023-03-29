import axios from "axios";

const API_URL = "http://localhost:8500/api/users";

//Register user
const signup = async userData => {
  const res = await axios.post(`${API_URL}`, userData);
  if (res.data) {
    const data = res.data;
    if (data.status === "success") {
      localStorage.setItem("user", JSON.stringify(data.data.user));
      console.log(data);
    }
  }
};

//Login user
const login = async userData => {
  const res = await axios.post(`${API_URL}/login`);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
    console.log(res.data);
  }
  return res.data;
};

// Logout user
const logout = () => localStorage.removeItem("user");

const authService = {
  signup,
  logout,
  login,
};
export default authService;
