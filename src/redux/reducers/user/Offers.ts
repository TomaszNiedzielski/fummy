import { UPDATE_OFFERS_SUCCESS, LOAD_OFFERS_SUCCESS } from '../../actions/user/Offers';

const initialState = {
    data: []
}

const OffersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_OFFERS_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case LOAD_OFFERS_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default OffersReducer;