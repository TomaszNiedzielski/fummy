import React from 'react';
import styles from './Details.module.css';
import { SocialMediaLinks } from '../../../../redux/reducers/user/Profile';
import Bio from '../bio/Bio';
import Links from '../links/Links';
import Offers from '../offers/Offers';
import EditButton from '../../../buttons/edit/EditButton';
import Avatar from '../avatar/Avatar';
import { Offer } from '../../../../redux/actions/user/Offers';
import _24HrStamp from '../24hr_stamp/24HrStamp';

interface Props {
    fullName: string;
    nick: string;
    bio: string;
    socialMediaLinks: SocialMediaLinks;
    avatar: string;
    isDashboard: boolean;
    offers: Offer[];
    isActive: boolean;
    is24HoursDeliveryOn: boolean;
}

const Details: React.FC<Props> = ({ fullName, nick, bio, socialMediaLinks, avatar, isDashboard, offers, isActive, is24HoursDeliveryOn }) => {
    if(!socialMediaLinks) return null;

    return (
        <div className="w-100 mt-2 mt-lg-4 ">
            <div className="d-flex w-100 justify-content-md-center">
                <Avatar name={avatar} />
                <div className="d-flex flex-column w-100 w-lg-unset" style={{ maxWidth: '550px' }}>
                    <div className="d-flex flex-column flex-md-row ml-3 ml-lg-0">
                        <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="d-flex align-items-center" style={{ maxWidth: 'calc(100vw - 185px)' }}>
                                    <div className={styles.nick}>{nick}</div>
                                    {isDashboard &&
                                    <div className="d-none d-md-block ml-3">
                                        <EditButton title="Edytuj profil" attributes={{ 'data-toggle': 'modal', 'data-target': '#editProfileModal' }} />
                                    </div>}
                                </div>
                                {is24HoursDeliveryOn ? <_24HrStamp /> : null}
                            </div>
                            <div style={{ color: '#ccc' }}>{fullName}</div>
                        </div>
                        {isDashboard &&
                        <div className="w-100 w-lg-25 d-flex d-md-none flex-column flex-md-row mt-1 ml-lg-3">
                            <EditButton title="Edytuj profil" attributes={{ 'data-toggle': 'modal', 'data-target': '#editProfileModal' }} />
                        </div>}
                    </div>
                    <div className="d-none d-md-block ml-3 ml-lg-0">
                        <Bio value={bio} isDashboard={isDashboard} />
                        <Links links={socialMediaLinks} />
                        <Offers isDashboard={isDashboard} nick={nick} data={offers} isActive={isActive} />
                    </div>
                </div>
            </div>
            <div className="d-block d-md-none">
                <Bio value={bio} isDashboard={isDashboard} />
                <Links links={socialMediaLinks} />
                <Offers isDashboard={isDashboard} nick={nick} data={offers} isActive={isActive} />
            </div>
        </div>
    );
}
export default Details;