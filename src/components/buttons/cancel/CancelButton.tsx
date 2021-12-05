import React from 'react';
import styles from './CancelButton.module.css';
import { Props } from '../primary/PrimaryButton';

const CancelButton: React.FC<Props> = ({ title, attributes, onClick }) => {
    return (
        <button className={styles.button} {...attributes} onClick={onClick}>{title}</button>
    );
}
export default CancelButton;