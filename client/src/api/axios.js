import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true, //Allow set cookies by https response 
});

export default instance;
  