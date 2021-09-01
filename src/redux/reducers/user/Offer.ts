import { UPDATE_OFFER_SUCCESS, LOAD_OFFER_SUCCESS } from '../../actions/user/Offer';

const initialState = {
    data: []
}

const OfferReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_OFFER_SUCCESS:
            console.log('action: ', action);
            return {
                ...state,
                data: action.payload
            }
        case LOAD_OFFER_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default OfferReducer;