import { Dispatch } from 'redux';
import { API_URL } from '../../../constants';
import { post, Response } from '../../../helpers/ApiRequest';
import { Profile } from '../../reducers/user/Profile';
import Cookies from 'universal-cookie';

export const UPDATE_PROFILE_DETAILS = 'UPDATE_PROFILE_DETAILS';
export const USER_PROFILE_LOADING_SUCCESS = 'USER_PROFILE_LOADING_SUCCESS';

interface Data extends Profile {
    avatarFile: File;
}

const cookies = new Cookies();

export const updateProfileDetails = (data: Data) => {
    return (dispatch: Dispatch) => {
        const token = restoreToken();
        const { avatarFile, fullName, nick, bio, socialMediaLinks } = data;
        
        const formData = new FormData();
        formData.append('avatar', avatarFile);
        formData.append('fullName', fullName);
        formData.append('nick', nick);
        formData.append('bio', bio);
        formData.append('socialMediaLinks', JSON.stringify(socialMediaLinks));

        fetch(API_URL+'profile/update-details', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => response.json())
        .then(response => {
            if(response.code === 200) {
                dispatch({
                    type: UPDATE_PROFILE_DETAILS,
                    payload: data
                });
            }
        });
    }
}

export const loadProfileDetails = () => {
    const token = restoreToken();

    return (dispatch: Dispatch) => {
        post('profile/load-details?token='+token)
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
    const token = cookies.get('token');

    return token;
}