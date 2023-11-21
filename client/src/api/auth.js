import axios from "./axios";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

//asdfghjoifdjrstfyu

export const verifyTokenRequest = () => axios.get("/verify");
