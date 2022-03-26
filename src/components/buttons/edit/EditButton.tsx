import React from 'react';
import styles from './EditButton.module.css';

interface Props {
    title: string;
    attributes?: object;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const EditButton: React.FC<Props> = ({ title, attributes, style, onClick }) => {
    return (
        <button
            className={styles.editButton}
            {...attributes}
            style={style}
            onClick={onClick}
        >{title}</button>
    );
}
export default EditButton;