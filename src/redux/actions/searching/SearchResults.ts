import { Dispatch } from 'redux';
import { post, Response } from '../../../helpers/ApiRequest';

export const SEARCH_USERS_REQUEST = 'SEARCH_USERS_REQUEST';
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const search = (term: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: SEARCH_USERS_REQUEST });
        
        post('search', { searchingWord: term })
        .then((response: Response) => {
            if(response.code === 200) {
                dispatch({
                    type: SEARCH_USERS_SUCCESS,
                    payload: response.data
                });
            }
        });
    }
}