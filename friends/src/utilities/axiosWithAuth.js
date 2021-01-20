import axios from "axios";

export const axiosWithAuth = () => {
  //new instance of axios with auth token passed into header
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:5000",
  });
};
