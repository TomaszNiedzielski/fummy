import React from 'react';

const DEFAULT_SIZE = '18px';

const VerifiedIcon: React.FC<{size?: number}> = ({ size }) => (
    <img
        src="/icons/check.png"
        alt="verified"
        className="verified-icon"
        style={{
            width: size ? size : DEFAULT_SIZE,
            height: size ? size : DEFAULT_SIZE
        }}
    />
);
export default VerifiedIcon;