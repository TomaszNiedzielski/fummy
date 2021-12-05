import React from 'react';
import styles from './ConfirmButton.module.css';
import { Props } from '../primary/PrimaryButton';

const ConfirmButton: React.FC<Props> = ({ title, onClick, disabled }) => {
    return (
        <button className={styles.button +' '+ (disabled ? styles.disabled : '')} onClick={onClick} disabled={disabled}>{title}</button>
    );
}
export default ConfirmButton;