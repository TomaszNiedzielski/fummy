import React from 'react';
import styles from './HamburgerButton.module.css';

interface Props {
    onClick: () => void;
    isOpen: boolean;
}

const HamburgerButton: React.FC<Props> = ({ onClick, isOpen }) => {
    return (
        <button className={styles.button + ' ' + (isOpen ? (styles.focus) : '')} onClick={onClick}>
            <div className={styles.hamburger}>
                <div className={styles.line}></div>
            </div>
        </button>
    );
}
export default HamburgerButton;