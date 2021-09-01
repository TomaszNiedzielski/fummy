import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthReducer from './reducers/user/Auth';
import ProfileReducer from './reducers/user/Profile';
import SearchResultsReducer from './reducers/searching/SearchResults';
import OfferReducer from './reducers/user/Offer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer,
    searchResults: SearchResultsReducer,
    offer: OfferReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;