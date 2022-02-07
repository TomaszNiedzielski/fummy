import React from 'react';
import styles from './ConfirmButton.module.css';
import { Props } from '../primary/PrimaryButton';

const ConfirmButton: React.FC<Props> = ({ title, onClick, disabled, style }) => {
    const Title = title;

    return (
        <button
            className={styles.button +' '+ (disabled ? styles.disabled : '')}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >{typeof title === 'function' ? <Title /> : title}</button>
    );
}
export default ConfirmButton;