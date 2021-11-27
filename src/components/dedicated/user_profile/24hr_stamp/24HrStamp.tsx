import React from 'react';
import styles from './24HrStamp.module.css';

interface Props {
    isSmall?: boolean;
}

const _24HrStamp: React.FC<Props> = ({ isSmall }) => {
    return (
        <div className={styles.container} style={isSmall ? { fontSize: '14px', padding: '1px 4px' } : {}}>
            <img src="/icons/lightning.png" alt="bolt" height={isSmall ? '15px' : '17px'} />
            <span>24h&nbsp;</span>
            {isSmall ? null : <span className="d-none d-md-block">realizacja</span>}
        </div>
    );
}
export default _24HrStamp