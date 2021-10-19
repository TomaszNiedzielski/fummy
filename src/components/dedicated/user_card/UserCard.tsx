import React, { useState, useEffect } from 'react';
import styles from './UserCard.module.css';
import { API_STORAGE } from '../../../constants';
import Link from 'next/link';
import { User } from '../../../pages';

interface Props extends User {
    style: object;
}

const UserCard: React.FC<Props> = ({ avatar, nick, fullName, style, prices }) => {
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
                    <img src={avatar ? API_STORAGE + "avatars/" + avatar : "/icons/user.png"} alt="avatar" className={styles.avatar} />
                    <div className={styles.nick} title={nick}>{nick}</div>
                    <div className={styles.fullname}>{fullName}</div>
                    {priceFrom ? <div className={styles.price}>Od {priceFrom} {prices.currency}</div> : null}
                </a>
            </Link>
        </div>
    );
}
export default UserCard;