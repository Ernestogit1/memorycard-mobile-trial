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

export const loadServices = {
  getUserData: async (token) => {
    
    const response = await axios.get(`${API_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
};



