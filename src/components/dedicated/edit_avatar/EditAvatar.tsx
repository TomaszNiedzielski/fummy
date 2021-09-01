import React from 'react';
import styles from './EditAvatar.module.css';
import { API_STORAGE } from '../../../constants';

interface Props {
    avatar: string;
    onSelectAvatar: (img: File, url: string) => void
}

const EditAvatar: React.FC<Props> = ({ avatar, onSelectAvatar }) => {
    const onChange = (e: any) => {
        const img = e.target.files[0];
        const url = URL.createObjectURL(img)

        onSelectAvatar(img, url);
    }

    return (
        <div className={styles.container}>
            <img alt="avatar" src={avatar ? (avatar.split(':')[0] === 'blob' ? avatar :  API_STORAGE + 'avatars/' + avatar) : '/icons/user.png'} />
            <label className={styles.label + " my-2 w-100"}>
                <input type="file" className="custom-file-input" accept="image/*" onChange={onChange} />
                Zmień zdjęcie profilowe
            </label>
        </div>
    );
}
export default EditAvatar;