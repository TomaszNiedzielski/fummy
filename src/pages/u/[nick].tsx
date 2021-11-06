import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SocialMediaLinks as SocialMediaLinksInterface } from '../../redux/reducers/user/Profile';
import { RootState } from '../../redux/store';
import PrimaryInput from '../../components/inputs/primary/PrimaryInput';
import { get, post } from '../../helpers/ApiRequest';
import * as Contants from '../../constants';
import Details from '../../components/dedicated/user_profile/details/Details';
import { LOAD_OFFERS_SUCCESS } from '../../redux/actions/user/Offers';
import Videos from '../../components/dedicated/user_profile/videos/Videos';
import Cookies from 'universal-cookie';
import { USER_PROFILE_LOADING_SUCCESS } from '../../redux/actions/user/Profile';

const UserPage: React.FC<any> = ({ offersFromServer, videos, isError404, userDetails }) => {
    if(isError404) {
        return (
            <div className="w-100 text-center p-2 vh-100">
                <h1>404</h1>
                <h6>Nie znaleziono takiego użytkownika.</h6>
            </div>
        );
    }

    const { profile, offers } = useSelector((state: RootState) => state);

    const [fullName, setFullName] = useState<string>(userDetails.fullName);
    const [nick, setNick] = useState<string>(userDetails.nick);
    const [bio, setBio] = useState<string>(userDetails.bio);
    const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLinksInterface>(userDetails.socialMediaLinks);
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
            setSocialMediaLinks(profile.socialMediaLinks);
        }
    }, [isDashboard, profile]);

    return (
        <div className="wrapper mx-2" style={{ minHeight: 'calc(100vh - 56px)' }}>
            <Details
                fullName={fullName}
                nick={nick}
                bio={bio}
                socialMediaLinks={socialMediaLinks}
                avatar={avatar}
                isDashboard={isDashboard}
                offers={offers.data}
            />

            {isDashboard && !isVerified ?
            <div className="my-5 d-flex align-items-center flex-column">
                <hr className="d-block d-lg-none" style={{ background: 'white', width: '100%' }} />
                <div className="font-weight-bold text-center my-4">
                    <div>Zweryfikuj swoje konto, aby Twój profil stał się dostępny.</div>
                    <div>Napisz do nas na nasz <a href={Contants.INSTAGRAM}>profil instagramowy</a>, wysyłając poniższy link do Twojego profilu.</div>
                    <PrimaryInput value={window.location.href} clickToCopy={true} />
                </div>
            </div> : null}

            <div className="mt-4">
                <Videos nick={nick} videos={videos} />
            </div>
        </div>
    );
}
export const getServerSideProps = async ({ params, req }) => {
    const token = new Cookies(req.headers.cookie).get('token');

    try {
        const userDetailsResponse: any = await post('profile/load-details?token='+token, { nick: params.nick });
        const { nick, isMailVerified, isDashboard } = userDetailsResponse.data;

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

        const responseWithOffers: any = await get('offers/load/'+params.nick);
        const responseWithVideos: any = await get('videos/get-list/'+params.nick);

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
                isError404: true
            }
        }
    }
}
export default UserPage;