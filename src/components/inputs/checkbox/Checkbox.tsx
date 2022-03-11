import React from 'react';
import styles from './Checkbox.module.css';

interface Props {
    value: boolean;
    label?: string;
    onChange?: (value: boolean) => void;
    errorMessage?: string;
}

const Checkbox: React.FC<Props> = ({ value, label, onChange, errorMessage }) => {
    return (
        <div className={styles.container} onClick={() => onChange(!value)}>
            <div className={styles.check}>
                <div className={styles.input}>
                    {value && <span>&#10004;</span>}
                </div>
                <div>{label}</div>
            </div>
            <div className={styles.error}>{errorMessage}</div>
        </div>
    );
}
export default Checkbox;