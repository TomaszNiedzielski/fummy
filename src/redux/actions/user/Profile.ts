import { Dispatch } from 'redux';
import { get, Response } from '../../../helpers/ApiRequest';
import Cookies from 'universal-cookie';

export const UPDATE_PROFILE_DETAILS = 'UPDATE_PROFILE_DETAILS';
export const USER_PROFILE_LOADING_SUCCESS = 'USER_PROFILE_LOADING_SUCCESS';

const cookies = new Cookies();

export const loadProfileDetails = () => {
    return (dispatch: Dispatch) => {
        get('users/me')
        .then((response: Response) => {
            if(response.code === 200) {
                dispatch({
                    type: USER_PROFILE_LOADING_SUCCESS,
                    payload: response.data
                });
            }
        });
    }
}

export const restoreToken = () => {
    return cookies.get('token');
}