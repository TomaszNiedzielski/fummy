import React from 'react';
import styles from './Details.module.css';
import { API_STORAGE } from '../../../../constants';
import { SocialMediaLinks } from '../../../../redux/reducers/user/Profile';
import Bio from '../bio/Bio';
import Links from '../links/Links';
import Offer, { OfferItem } from '../offer/Offer';
import EditButton from '../../../buttons/edit/EditButton';

interface Props {
    fullName: string;
    nick: string;
    bio: string;
    socialMediaLinks: SocialMediaLinks;
    avatar: string;
    isDashboard: boolean;
    offer: OfferItem[];
}

const Details: React.FC<Props> = ({ fullName, nick, bio, socialMediaLinks, avatar, isDashboard, offer }) => {
    if(!socialMediaLinks) return null;

    return (
        <div className="w-100 mt-2 mt-lg-4 ">
            <div className="d-flex w-100 justify-content-lg-center">
                <div className={styles.avatar}>
                    <img alt="zdjęcie profilowe" className="md-w-100" src={avatar ? (avatar.split(':')[0] === 'blob' ? avatar :  API_STORAGE + 'avatars/' + avatar) : '/icons/user.png'} />
                </div>
                <div className="d-flex flex-column w-100 w-lg-unset">
                    <div className="d-flex flex-column flex-lg-row ml-3 ml-lg-0">
                        <div>
                            <div className="d-flex align-items-center">
                                <div className={styles.nick}>{nick}</div>
                                {isDashboard &&
                                <div className="d-none d-lg-block ml-3">
                                    <EditButton title="Edytuj profil" attributes={{ 'data-toggle': 'modal', 'data-target': '#editProfileModal' }} />
                                </div>}
                            </div>
                            <div style={{ color: '#ccc' }}>{fullName}</div>
                        </div>
                        {isDashboard &&
                        <div className="w-100 w-lg-25 d-flex d-lg-none flex-column flex-lg-row mt-1 ml-lg-3">
                            <EditButton title="Edytuj profil" attributes={{ 'data-toggle': 'modal', 'data-target': '#editProfileModal' }} />
                        </div>}
                    </div>
                    <div className="d-none d-lg-block">
                        <Bio value={bio} isDashboard={isDashboard} />
                        <Links links={socialMediaLinks} />
                        <Offer isDashboard={isDashboard} nick={nick} data={offer} />
                    </div>
                </div>
            </div>
            <div className="d-block d-lg-none">
                <Bio value={bio} isDashboard={isDashboard} />
                <Links links={socialMediaLinks} />
                <Offer isDashboard={isDashboard} nick={nick} data={offer} />
            </div>
        </div>
    );
}
export default Details;