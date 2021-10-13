import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SocialMediaLinks as SocialMediaLinksInterface } from '../../redux/reducers/user/Profile';
import PrimaryLoader from '../../components/loaders/PrimaryLoader';
import { RootState } from '../../redux/store';
import PrimaryInput from '../../components/inputs/primary/PrimaryInput';
import { get, post, Response } from '../../helpers/ApiRequest';
import * as Contants from '../../constants';
import Details from '../../components/dedicated/user_profile/details/Details';
import { LOAD_OFFERS_SUCCESS } from '../../redux/actions/user/Offers';
import Videos from '../../components/dedicated/user_profile/videos/Videos';
import Cookies from 'universal-cookie';

const UserPage: React.FC<any> = ({ offerFromServer, videos, urlNick }) => {
    const [isDashboard, setIsDashboard] = useState(false);

    const { profile, offers } = useSelector((state: RootState) => state);
    const { token } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: LOAD_OFFERS_SUCCESS, payload: offerFromServer });
    }, [offerFromServer]);

    useEffect(() => {
        if(urlNick === profile.nick) {
            setIsDashboard(true);
        }
        if(isDashboard) {
            setFullName(profile.fullName);
            setNick(profile.nick);
            setBio(profile.bio);
            setAvatar(profile.avatar);
            setSocialMediaLinks(profile.socialMediaLinks);
        }
    }, [profile]);

    const [fullName, setFullName] = useState<string>('');
    const [nick, setNick] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLinksInterface>();
    const [avatar, setAvatar] = useState<string>('');
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [isMailVerified, setIsMailVerified] = useState<boolean>(null);
    const [error404, setError404] = useState<boolean>();

    useEffect(() => {
        if(isDashboard === false && isMailVerified === false) {
            setError404(true);
        }

        if(isDashboard === true && isMailVerified === false) {
            window.location.href = '/mail/unverified';
        }
    }, [isDashboard, isMailVerified]);

    useEffect(() => {
        if(!urlNick) return;

        post('profile/load-details?token='+token, { nick: urlNick })
        .then((response: Response) => {
            if(response.code === 200) {
                const { fullName, nick, bio, socialMediaLinks, avatar, isVerified, isMailVerified } = response.data;

                setFullName(fullName);
                setNick(nick);
                setBio(bio);
                setSocialMediaLinks(socialMediaLinks ? socialMediaLinks : {});
                setAvatar(avatar);
                setIsVerified(isVerified);
                setIsMailVerified(isMailVerified);
            }
        })
        .catch(() => {
            setError404(true);
        });
    }, [urlNick]);

    if(!error404 && fullName) {
        return (
            <div className="wrapper mx-2" style={{ minHeight: 'calc(100vh - 56px)' }}>
                <Details
                    fullName={fullName}
                    nick={nick}
                    bio={bio}
                    socialMediaLinks={socialMediaLinks}
                    avatar={avatar}
                    isDashboard={isDashboard}
                    offer={offers.data}
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
        )
    } else if(error404) {
        return (
            <div className="w-100 text-center p-2 vh-100">
                <h1>404</h1>
                <h6>Nie znaleziono takiego użytkownika.</h6>
            </div>
        )
    } else {
        return (
            <PrimaryLoader />
        )
    }
}
export const getServerSideProps = async ({ params, req }) => {
    const token = new Cookies(req.headers.cookie).get('token');

    if(token) {
        const userDetailsResponse: any = await post('profile/load-details?token='+token);

        const isDashboard = userDetailsResponse.data.nick === params.nick;

        if(userDetailsResponse.data.isMailVerified === false && isDashboard) {
            return {
                redirect: {
                    destination: '/mail/unverified',
                    permanent: false
                }
            }
        }
    }

    const responseWithOffers: any = await get('offers/load/'+params.nick);
    const responseWithVideos: any = await get('videos/get-list/'+params.nick);

    if(responseWithOffers.code === 200 && responseWithVideos.code === 200) {
        return {
            props: {
                offerFromServer: responseWithOffers.data,
                videos: responseWithVideos.data,
                urlNick: params.nick
            }
        }
    }
}
export default UserPage;