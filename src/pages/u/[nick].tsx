import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SocialMediaLinks as SocialMediaLinksInterface } from '../../redux/reducers/user/Profile';
import PrimaryLoader from '../../components/loaders/PrimaryLoader';
import { RootState } from '../../redux/store';
import PrimaryInput from '../../components/inputs/primary/PrimaryInput';
import { get, post, Response } from '../../helpers/ApiRequest';
import * as Contants from '../../constants';
import Details from '../../components/dedicated/user_profile/details/Details';
import { LOAD_OFFER_SUCCESS } from '../../redux/actions/user/Offer';
import Videos from '../../components/dedicated/user_profile/videos/Videos';

const UserPage: React.FC<any> = ({ offerFromServer, videos }) => {
    const [isDashboard, setIsDashboard] = useState(false);
    const [urlNick, setUrlNick] = useState<string>();

    const { profile, offer } = useSelector((state: RootState) => state);
    const { token } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: LOAD_OFFER_SUCCESS, payload: offerFromServer });
    }, [offerFromServer]);

    useEffect(() => {
        const url: string = window.location.href;
        const lastUrlElement = url.split('/').pop();

        if(lastUrlElement) {
            setUrlNick(lastUrlElement);
        }

        if(lastUrlElement === profile.nick) {
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
            } else {
                setError404(true);
            }
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
                    offer={offer.data}
                />
                <hr className="d-none d-lg-block" />

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
export const getServerSideProps = async ({ params }) => {
    const responseWithOffer: any = await get('offer/load/'+params.nick);
    const responseWithVideos: any = await get('videos/get-list/'+params.nick);

    if(responseWithOffer.code === 200 && responseWithVideos.code === 200) {
        return {
            props: {
                offerFromServer: responseWithOffer.data,
                videos: responseWithVideos.data
            }
        }
    }
}
export default UserPage;