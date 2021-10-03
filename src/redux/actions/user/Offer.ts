import { Dispatch } from 'redux';
import { post, Response } from '../../../helpers/ApiRequest';
import { restoreToken } from './Profile';

export const UPDATE_OFFER_SUCCESS = 'UPDATE_OFFER_SUCCESS';
export const LOAD_OFFER_SUCCESS = 'LOAD_OFFER_SUCCESS';

export interface OfferItem {
    title: string;
    price: string;
    currency: string;
}

export const saveOffer = (offerData: OfferItem[]) => {
    return (dispatch: Dispatch) => {
        const token = restoreToken();
        post('offer/update?token='+token, { offerData })
        .then((response: Response) => {
            console.log('after update response: ', response);
            if(response.code === 200) {
                dispatch({
                    type: UPDATE_OFFER_SUCCESS,
                    payload: response.data
                });
            }
        });
    }
}