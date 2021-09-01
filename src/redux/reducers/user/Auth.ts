import { AUTH_SUCCESS, SET_TOKEN, LOGOUT } from '../../actions/user/Auth';

const initialState = {
    token: ''
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_SUCCESS:
        case SET_TOKEN:
            return { token: action.payload.token }
        case LOGOUT:
            return { token: '' };
        default:
            return state;
    }
}
export default AuthReducer;