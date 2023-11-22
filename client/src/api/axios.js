import axios from "axios";
import { API_URL } from '../../'

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true, //Allow set cookies by https response 
});

export default instance;
  