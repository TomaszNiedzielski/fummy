import { UPDATE_PROFILE_DETAILS, USER_PROFILE_LOADING_SUCCESS } from '../../actions/user/Profile';

interface Action {
    type: string;
    payload: Profile;
}

export interface SocialMediaLink {
    link: string;
    name: string;
}

export interface SocialMediaLinks {
    instagram: SocialMediaLink;
    tiktok: SocialMediaLink;
    youtube: SocialMediaLink;
}

export interface Profile {
    fullName: string;
    bio: string;
    nick: string;
    avatar: string;
    isMailVerified: boolean;
    socialMediaLinks: SocialMediaLinks;
}

const initialLink = {
    link: '',
    name: ''
}

const initialState: Profile = {
    fullName: '',
    bio: '',
    nick: '',
    avatar: '',
    isMailVerified: null,
    socialMediaLinks: {
        instagram: initialLink,
        tiktok: initialLink,
        youtube: initialLink
    }
}

const ProfileReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case USER_PROFILE_LOADING_SUCCESS:
        case UPDATE_PROFILE_DETAILS:
            let user = Object.assign({}, action.payload);
            if(!user.fullName) user.fullName = '';
            if(!user.bio) user.bio = '';
            if(!user.nick) user.nick = '';
            if(!user.isMailVerified) user.isMailVerified = null;
            if(!user.socialMediaLinks) {
                user.socialMediaLinks = {
                    instagram: initialLink,
                    tiktok: initialLink,
                    youtube: initialLink
                }
            }

            return user;
        default:
            return state;
    }
}
export default ProfileReducer;