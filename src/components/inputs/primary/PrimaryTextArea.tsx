import React from 'react';
import styles from './PrimaryInput.module.css';
import { Props as InputProps } from './PrimaryInput';

interface Props extends InputProps {
    rows?: number;
}

const PrimaryTextArea: React.FC<Props> = ({ label, placeholder, value, onChange, errorMessage, maxLength, onBlur, style, rows }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <textarea
                className={styles.input}
                placeholder={placeholder}
                value={value ? value : ''}
                onChange={onChange ? e => onChange(e.target.value) : () => {}}
                maxLength={maxLength}
                onBlur={onBlur}
                style={style}
                rows={rows}
            ></textarea>
            {errorMessage && <div className={styles.error}>{ errorMessage }</div>}
        </div>
    );
}
export default PrimaryTextArea;