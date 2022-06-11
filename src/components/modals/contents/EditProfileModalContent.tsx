import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NICK_LENGTH } from '../../../constants/InputLengths';
import { post, Response } from '../../../helpers/ApiRequest';
import { bioRules, fullNameRules, instagramLinkRules, tiktokLinkRules, nickRules, youtubeLinkRules } from '../../../helpers/ValidationRules';
import { UPDATE_PROFILE_DETAILS } from '../../../redux/actions/user/Profile';
import { RootState } from '../../../redux/store';
import PrimaryButton from '../../buttons/primary/PrimaryButton';
import EditAvatar from '../../dedicated/edit_avatar/EditAvatar';
import PrimaryInput from '../../inputs/primary/PrimaryInput';
import PrimaryTextArea from '../../inputs/primary/PrimaryTextArea';
import { hideModal } from '../PrimaryModal';

const EditProfileModalContent = () => {
    const profile = useSelector((state: RootState) => state.profile);

    const { socials } = profile;

    const [isLoading, setIsLoading] = useState(false);
    const [fullName, setFullName] = useState<string>();
    const [nick, setNick] = useState<string>();
    const [bio, setBio] = useState<string>();
    const [avatarFile, setAvatarFile] = useState<Blob>();
    const [avatarUrl, setAvatarUrl] = useState<string>();

    const [instagramLink, setInstagramLink] = useState<string>();
    const [instagramName, setInstagramName] = useState<string>();
    const [tiktokLink, setTiktokLink] = useState<string>();
    const [tiktokName, setTiktokName] = useState<string>();
    const [youtubeLink, setYoutubeLink] = useState<string>();
    const [youtubeName, setYoutubeName] = useState<string>();

    const [fullNameError, setFullNameError] = useState<string>();
    const [nickError, setNickError] = useState<string>();
    const [bioError, setBioError] = useState<string>();

    const [instagramLinkError, setInstagramLinkError] = useState<string>();
    const [tiktokLinkError, setTiktokLinkError] = useState<string>();
    const [youtubeLinkError, setYoutubeLinkError] = useState<string>();

    const dispatch = useDispatch();

    const updateProfileDetails = () => {
        if (!isFormCorrect()) return;

        setIsLoading(true);

        const socials = {
            instagram: {
                name: instagramName,
                link: instagramLink
            },
            tiktok: {
                name: tiktokName,
                link: tiktokLink
            },
            youtube: {
                name: youtubeName,
                link: youtubeLink
            }
        }

        const formData = new FormData();
        avatarFile && formData.append('avatar', avatarFile);
        formData.append('fullName', fullName);
        formData.append('nick', nick);
        bio && formData.append('bio', bio);
        formData.append('socials', JSON.stringify(socials));

        post('users/me', formData)
        .then((response: Response) => {
            if (response.code === 200) {
                dispatch({
                    type: UPDATE_PROFILE_DETAILS,
                    payload: { fullName, bio, nick, avatarFile, avatar: avatarUrl, socials }
                });
                hideModal();
            }
        })
        .catch(({ response }) => {
            const { fullName, nick, bio } = response.data.errors;

            setFullNameError(fullName);
            setNickError(nick);
            setBioError(bio);
        })
        .then(() => setIsLoading(false));
    }

    useEffect(() => {
        setFullName(profile.fullName);
        setNick(profile.nick);
        setBio(profile.bio);

        const { instagram, tiktok, youtube } = socials;

        if (instagram) {
            setInstagramLink(instagram.link);
            setInstagramName(instagram.name);
        }

        if (tiktok) {
            setTiktokLink(tiktok.link);
            setTiktokName(tiktok.name);
        }

        if (youtube) {
            setYoutubeLink(youtube.link);
            setYoutubeName(youtube.name);
        }

        setAvatarUrl(profile.avatar);
    }, [profile, socials]);

    const isFormCorrect = () => {        
        setFullNameError(fullNameRules(fullName));
        setNickError(nickRules(nick));

        if (!fullName || !nick || fullNameError || nickError || instagramLinkError || tiktokLinkError || youtubeLinkError) {
            return false;
        }
        
        return true;
    }

    useEffect(() => {
        if (fullNameError) setFullNameError(fullNameRules(fullName));
    }, [fullName]);

    useEffect(() => {
        if (nickError) setNickError(nickRules(nick));
    }, [nick]);

    useEffect(() => {
        if (bioError) setBioError(bioRules(bio));
    }, [bio]);

    useEffect(() => {
        if (instagramLinkError) setInstagramLinkError(instagramLinkRules(instagramLink));
    }, [instagramLink]);

    useEffect(() => {
        if (tiktokLinkError) setTiktokLinkError(tiktokLinkRules(tiktokLink));
    }, [tiktokLink]);

    useEffect(() => {
        if (youtubeLinkError) setYoutubeLinkError(youtubeLinkRules(youtubeLink));
    }, [youtubeLink]);

    return (
        <div className="d-flex flex-column align-items-center">
            <EditAvatar
                avatar={avatarUrl}
                onSelectAvatar={(img: Blob, url) => {setAvatarFile(img); setAvatarUrl(url)}}
            />
            <PrimaryInput
                label="Imię i Nazwisko"
                placeholder="np. Monika Kowalska"
                value={fullName}
                onChange={newValue => setFullName(newValue)}
                errorMessage={fullNameError}
                onBlur={() => setFullNameError(fullNameRules(fullName))}
            />
            <PrimaryInput
                label="Nick"
                placeholder="np. monika_kowalska"
                value={nick}
                onChange={newValue => setNick(newValue)}
                maxLength={NICK_LENGTH}
                errorMessage={nickError}
                onBlur={() => setNickError(nickRules(nick))}
            />
            <PrimaryTextArea
                label="Bio"
                placeholder="Opisz się w kilku zdaniach"
                value={bio}
                onChange={newValue => setBio(newValue)}
                errorMessage={bioError}
                onBlur={() => setBioError(bioRules(bio))}
            />

            <div className="w-100 d-flex mb-4 mb-md-2 flex-column flex-md-row">
                <PrimaryInput
                    label="Instagram"
                    placeholder="https://www.instagram.com/your-nick/"
                    value={instagramLink}
                    onChange={newValue => {
                        setInstagramLink(newValue);
                        setInstagramName(newValue.split('/')[3]);
                    }}
                    errorMessage={instagramLinkError}
                    onBlur={() => setInstagramLinkError(instagramLinkRules(instagramLink))}
                />
                <div className="ml-md-2">
                    <PrimaryInput
                        label="Nazwa profilu"
                        placeholder="your-nick"
                        value={instagramName}
                        onChange={newValue => setInstagramName(newValue)}
                    />
                </div>
            </div>

            <div className="w-100 d-flex mb-4 mb-md-2 flex-column flex-md-row">
                <PrimaryInput
                    label="Tiktok"
                    placeholder="https://www.tiktok.com/@your-nick"
                    value={tiktokLink}
                    onChange={newValue => {
                        setTiktokLink(newValue);
                        setTiktokName(newValue?.split('@')[1]?.split('?')[0]);
                    }}
                    errorMessage={tiktokLinkError}
                    onBlur={() => setTiktokLinkError(tiktokLinkRules(tiktokLink))}
                />
                <div className="ml-md-2">
                    <PrimaryInput
                        label="Nazwa profilu"
                        placeholder="your-nick"
                        value={tiktokName}
                        onChange={newValue => setTiktokName(newValue)}
                    />
                </div>
            </div>

            <div className="w-100 d-flex mb-4 mb-md-2 flex-column flex-md-row">
                <PrimaryInput
                    label="Youtube"
                    placeholder="https://www.youtube.com/c/your-channel-name"
                    value={youtubeLink}
                    onChange={newValue => {
                        setYoutubeLink(newValue);
                        setYoutubeName(newValue?.split('/')[4])
                    }}
                    errorMessage={youtubeLinkError}
                    onBlur={() => setYoutubeLinkError(youtubeLinkRules(youtubeLink))}
                />
                <div className="ml-md-2">
                    <PrimaryInput
                        label="Nazwa profilu"
                        placeholder="your-channel-name"
                        value={youtubeName}
                        onChange={newValue => setYoutubeName(newValue)}
                    />
                </div>
            </div>

            <div className="mt-3 w-75 d-flex justify-content-center mb-5">
                <PrimaryButton
                    title="Zapisz"
                    onClick={() => updateProfileDetails()}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}
export default EditProfileModalContent;