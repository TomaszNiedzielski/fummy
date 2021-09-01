import React from 'react';
import styles from './EditButton.module.css';

interface Props {
    title: string;
    attributes: object;
}

const EditButton: React.FC<Props> = ({ title, attributes }) => {
    return (
        <button className={styles.editButton} {...attributes}>{title}</button>
    );
}
export default EditButton;