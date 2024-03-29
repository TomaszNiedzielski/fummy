import { Dispatch } from 'redux';
import Cookies from 'universal-cookie';
import { post } from '../../../helpers/ApiRequest';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';

const cookies = new Cookies();

export const authSuccess = (token: string) => {
    return (dispatch: Dispatch) => {
        cookies.set('token', token, { path: '/', maxAge: 31536000 });
        dispatch({ type: AUTH_SUCCESS, payload: { token }});
    }
}

export const setToken = (token: string) => {
    return {
        type: SET_TOKEN,
        payload: { token }
    }
}

export const logout = () => {
    return () => {
        post('auth/logout')
        .finally(() => {
            cookies.remove('token', { path: '/' });
            window.location.reload();
        });
    }
}