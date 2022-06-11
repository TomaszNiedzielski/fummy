import { Dispatch } from 'redux';
import { post, Response } from '../../../helpers/ApiRequest';

export const UPDATE_OFFERS_SUCCESS = 'UPDATE_OFFERS_SUCCESS';
export const LOAD_OFFERS_SUCCESS = 'LOAD_OFFERS_SUCCESS';

export interface Offer {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: string;
}

export const saveOffer = (offers: Offer[]) => {
    return (dispatch: Dispatch) => {
        post('offers', { offers })
        .then((response: Response) => {
            if (response.code === 200) {
                dispatch({
                    type: UPDATE_OFFERS_SUCCESS,
                    payload: response.data
                });
            }
        });
    }
}