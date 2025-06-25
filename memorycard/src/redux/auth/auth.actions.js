import { authService, loadServices } from '@api/auth.api';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USER_LOGOUT
} from "@constants/constants" ;
import {initDB, storeToken, removeToken, getToken} from  '@db/sqlite';

export const initializeDatabase = () => async (dispatch) => {
  try {
    await initDB(); 
  } catch (error) {
    console.error("SQLite Initialization Error:", error);
  }
};


export const loaduserData = () => async (dispatch) => {
    try {
        const token = await getToken();
        
        if (!token) {
            // No token found - don't dispatch any action
            return null;
        }
        
        // Pass the token to getUserData
        const data = await loadServices.getUserData(token);
        
        dispatch({ 
            type: LOGIN_SUCCESS, 
            payload: data 
        });
        return data;
    } catch (error) {
        console.log("No valid session");
        return null;
    }
};



export const login = (username, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const data = await authService.login(username, password);
        await storeToken(data.token)
        dispatch({ 
            type: LOGIN_SUCCESS, 
            payload: data
        });
        return data;
    } catch (error) {
        dispatch({ 
            type: LOGIN_FAILURE, 
            payload: error.response?.data?.message || 'Login failed' 
        });
        throw error;
    }
};

export const logoutUser = () => async (dispatch) => {
  await removeToken();
    dispatch({ type: USER_LOGOUT });
};