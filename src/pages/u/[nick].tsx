import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Socials as SocialsInterface } from '../../redux/reducers/user/Profile';
import { RootState } from '../../redux/store';
import { get } from '../../helpers/ApiRequest';
import Details from '../../components/dedicated/user_profile/details/Details';
import { LOAD_OFFERS_SUCCESS } from '../../redux/actions/user/Offers';
import Videos from '../../components/dedicated/user_profile/videos/Videos';
import Cookies from 'universal-cookie';
import { USER_PROFILE_LOADING_SUCCESS } from '../../redux/actions/user/Profile';
import CompletenessSteps from '../../components/dedicated/user_profile/completeness_steps/CompletenessSteps';
import Reviews from '../../components/dedicated/user_profile/reviews/Reviews';

const UserPage: React.FC<any> = ({ offersFromServer, videos, isError404, userDetails, e }) => {
    const { profile, offers } = useSelector((state: RootState) => state);

    const [fullName, setFullName] = useState<string>(userDetails.fullName);
    const [nick, setNick] = useState<string>(userDetails.nick);
    const [bio, setBio] = useState<string>(userDetails.bio);
    const [socials, setSocials] = useState<SocialsInterface>(userDetails.socials);
    const [avatar, setAvatar] = useState<string>(userDetails.avatar);
    const { isVerified, isDashboard } = userDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if(offersFromServer) {
            dispatch({ type: LOAD_OFFERS_SUCCESS, payload: offersFromServer });
        }
    }, [offersFromServer]);

    useEffect(() => {
        if(isDashboard) {
            dispatch({ type: USER_PROFILE_LOADING_SUCCESS, payload: userDetails });
        }
    }, [isDashboard]);

    useEffect(() => {
        if(isDashboard) {
            setFullName(profile.fullName);
            setNick(profile.nick);
            setBio(profile.bio);
            setAvatar(profile.avatar);
            setSocials(profile.socials);
        }
    }, [isDashboard, profile]);

    if(!isError404) {
        return (
            <div className="wrapper mx-2" style={{ minHeight: 'calc(100vh - 56px)' }}>
                <Details
                    fullName={fullName}
                    nick={nick}
                    bio={bio}
                    socials={socials}
                    avatar={avatar}
                    isDashboard={isDashboard}
                    offers={offers.data}
                    isActive={userDetails.isActive}
                    is24HoursDeliveryOn={userDetails.is24HoursDeliveryOn}
                />
                {isDashboard && <CompletenessSteps
                    isVerified={isVerified}
                    isWelcomeVideoCompleted={videos.length > 0 ? true : false}
                />}
                <div className="container" style={{ minHeight: 'unset' }}>
                    <div className="mt-4">
                        <Videos nick={nick} videos={videos} />
                    </div>
                    <div className="my-5">
                        <Reviews isDashboard={isDashboard } />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-100 text-center p-2 vh-100">
            <h1>404</h1>
            <h6>Nie znaleziono takiego użytkownika.</h6>
        </div>
    );
}

export const getServerSideProps = async ({ params, req }) => {
    const token = new Cookies(req.headers.cookie).get('token');
    const { nick } = params;

    try {
        const userDetailsResponse: any = await get('users/'+nick+'?token='+token);
        const { isMailVerified, isDashboard } = userDetailsResponse.data;

        if(isMailVerified === false && isDashboard) {
            return {
                redirect: {
                    destination: '/mail/unverified',
                    permanent: false
                }
            }
        }

        let isError404 = false;
        if((isDashboard === false && isMailVerified === false) || !nick) {
            isError404 = true;
        }

        const responseWithOffers: any = await get('offers?user_nick='+nick);
        const responseWithVideos: any = await get('videos?user_nick='+nick);

        if(responseWithOffers.code === 200 && responseWithVideos.code === 200) {
            return {
                props: {
                    offersFromServer: responseWithOffers.data,
                    videos: responseWithVideos.data,
                    isError404,
                    userDetails: userDetailsResponse.data,
                }
            }
        }
    } catch {
        return {
            props: {
                isError404: true,
                userDetails: {}
            }
        }
    }
}
export default UserPage;