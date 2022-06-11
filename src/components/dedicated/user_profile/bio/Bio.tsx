import React from 'react';
import styles from './Bio.module.css';

interface Props {
    value: string;
    isDashboard: boolean;
}

const Bio: React.FC<Props> = ({ value, isDashboard }) => {
    if (value) {
        return (
            <div className={styles.container}>
                <h6 className="d-none d-lg-block">Bio</h6>
                <div className={styles.text}>{value}</div>
            </div>
        );
    } else if (isDashboard) {
        return (
            <div className={styles.container}>
                <h6>Bio</h6>
                <div className={styles.muted}>Przedstaw się w kilku słowach, aby uatrakcyjnić swój profil...</div>
            </div>
        );
    }
    
    return null;
}
export default Bio;