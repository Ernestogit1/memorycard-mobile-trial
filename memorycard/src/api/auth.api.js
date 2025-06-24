import axios from 'axios';
import { API_URL } from "@env";


export const authService = {
  login: async (username, password) => {
    const response = await axios.post(`${API_URL}/api/users/login`, {
      username,
      password
    });
    return response.data;
  }
};