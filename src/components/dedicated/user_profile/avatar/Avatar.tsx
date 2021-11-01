import React from 'react';
import styles from './Avatar.module.css';
import { API_STORAGE } from '../../../../constants';
import { isLinkExternal } from '../../../../helpers/Link';

const Avatar: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div className={styles.container}>
            <img alt="zdjęcie profilowe" className="md-w-100" src={name ? (name.split(':')[0] === 'blob' ? name :  (isLinkExternal(name) ? name : API_STORAGE + 'avatars/' + name)) : '/icons/user_square.png'} />
        </div>
    );
}
export default Avatar;