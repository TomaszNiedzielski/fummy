import { SEARCH_USERS_SUCCESS, CLEAR_SEARCH_RESULTS, SEARCH_USERS_REQUEST } from '../../actions/searching/SearchResults';

interface Action {
    type: string;
    payload: any;
}

export interface Result {
    fullName: string;
    avatar: string;
    nick: string;
    isVerified: boolean;
    is24HoursDeliveryOn: boolean;
}

interface State {
    isLoading: boolean;
    loaded: boolean;
    data: Result[];
}

const initialState: State = {
    isLoading: false,
    loaded: false,
    data: []
}

const SearchResultsReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case SEARCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case SEARCH_USERS_SUCCESS:
            return {
                isLoading: false,
                loaded: true,
                data: action.payload
            }
        case CLEAR_SEARCH_RESULTS:
            return {
                isLoading: false,
                loaded: false,
                data: []
            }
        default:
            return state;
    }
}
export default SearchResultsReducer;