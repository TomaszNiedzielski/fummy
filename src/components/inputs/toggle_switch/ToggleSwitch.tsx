import React from 'react';
import styles from './ToggleSwitch.module.css';

interface Props {
    checked?: boolean;
    onChange?: (val: boolean) => void;
}

const ToggleSwitch: React.FC<Props> = ({ checked, onChange }) => {
    return (
        <div>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={e => onChange(e.target.checked)}
                />
                <span className={styles.slider} />
            </label>
        </div>
    );
}
export default ToggleSwitch;