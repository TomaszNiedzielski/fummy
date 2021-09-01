import React from 'react';
import styles from './UserCard.module.css';
import { API_STORAGE } from '../../../constants';
import VerifiedIcon from '../../icons/VerifiedIcon';
import Link from 'next/link';

interface Props {
    avatar: string;
    nick: string;
    isVerified: boolean;
    style: object;
    prices?: {
        from: string;
        to: string;
    }
}

const UserCard: React.FC<Props> = ({ avatar, nick, isVerified, style, prices }) => {
    return (
        <div className={styles.container} style={style}>
            <Link href={"/u/"+nick}>
                <a style={style}>
                    <img src={avatar ? API_STORAGE + "avatars/" + avatar : "/icons/user.png"} alt="avatar" className={styles.avatar} />
                    <div className="d-flex align-items-center mt-2">
                        <div className={styles.nick} title={nick}>{nick}</div>
                        {/* <div className="d-flex">{isVerified ? <VerifiedIcon /> : null}</div> */}
                    </div>
                    {prices && prices.from ?
                    <div className={styles.price}>
                        {prices.from === prices.to ? 'Od ' + prices.from : (
                            <>{prices.from} - {prices.to}</>
                        )}
                    </div> : null}
                </a>
            </Link>
        </div>
    )
}
export default UserCard;