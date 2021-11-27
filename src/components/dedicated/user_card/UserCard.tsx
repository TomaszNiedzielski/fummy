import React, { useState, useEffect } from 'react';
import styles from './UserCard.module.css';
import { API_STORAGE } from '../../../constants';
import Link from 'next/link';
import { User } from '../../../pages';
import { isLinkExternal } from '../../../helpers/Link';
import _24HrStamp from '../user_profile/24hr_stamp/24HrStamp';

interface Props extends User {
    style: object;
}

const UserCard: React.FC<Props> = ({ avatar, nick, fullName, style, prices, is24HoursDeliveryOn }) => {
    const [priceFrom, setPriceFrom] = useState<string>();

    useEffect(() => {
        if(!prices) return;
        
        const splittedPriceFrom = prices.from.split('.');
        if(splittedPriceFrom[1] === '00') {
            setPriceFrom(splittedPriceFrom[0]);
        }
    }, [prices]);

    return (
        <div className={styles.container} style={style}>
            <Link href={"/u/"+nick}>
                <a style={style}>
                    <div className={styles.avatar}>
                        <img src={avatar ? (isLinkExternal(avatar) ? avatar : API_STORAGE + 'avatars/' + avatar) : '/icons/user.png'} alt="avatar" className={styles.avatar} />
                    </div>
                    <div className={styles.nick} title={nick}>{nick}</div>
                    <div className={styles.fullname}>{fullName}</div>
                    <div className="d-flex align-items-center justify-content-between">
                        {priceFrom ? <div className={styles.price}>Od {priceFrom} {prices.currency}</div> : null}
                        {is24HoursDeliveryOn ? <_24HrStamp isSmall /> : null}
                    </div>
                </a>
            </Link>
        </div>
    );
}
export default UserCard;