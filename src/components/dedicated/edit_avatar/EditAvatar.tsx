import React, { useState } from 'react';
import styles from './EditAvatar.module.css';
import { API_STORAGE } from '../../../constants';
import Editor from './editor/Editor';

interface Props {
    avatar: string;
    onSelectAvatar: (img: Blob, url: string) => void
}

const EditAvatar: React.FC<Props> = ({ avatar, onSelectAvatar }) => {
    const [isEditorVisible, setIsEditorVisible] = useState<boolean>();
    const [selectedAvatar, setSelectedAvatar] = useState<string>();

    const onChange = (e: any) => {
        const img = e.target.files[0];
        if(!img) return;

        const url = URL.createObjectURL(img)
        setSelectedAvatar(url);
        setIsEditorVisible(true);
    }

    const onCrop = async (src: string) => {
        let blob = await fetch(src).then(r => r.blob());

        onSelectAvatar(blob, src);
        setIsEditorVisible(false);
    }

    const onCancel = () => {
        setSelectedAvatar(null);
        setIsEditorVisible(false);
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.avatars}>
                <img alt="avatar" className={styles.round} src={avatar ? (avatar.split(':')[0] === 'blob' ? avatar :  API_STORAGE + 'avatars/' + avatar) : '/icons/user.png'} />
                <img alt="avatar" className={styles.rect} src={avatar ? (avatar.split(':')[0] === 'blob' ? avatar :  API_STORAGE + 'avatars/' + avatar) : '/icons/user.png'} />
            </div>
            <label className={styles.label + " my-2 w-100"}>
                <input type="file" className="custom-file-input" accept="image/*" onChange={(e) => { onChange(e); e.target.value = null; }} />
                Zmień zdjęcie profilowe
            </label>
        </div>
        {isEditorVisible && <Editor
            image={selectedAvatar}
            aspect={1}
            shape="rect"
            onCrop={(src) => onCrop(src)}
            onCancel={onCancel}
        />}
        </>
    );
}
export default EditAvatar;