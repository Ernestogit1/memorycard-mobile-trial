import { authService } from '@api/auth.api';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from "@constants/constants";

export const login = (username, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const data = await authService.login(username, password);
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