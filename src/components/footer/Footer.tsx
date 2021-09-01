import React from 'react';
import { APP_NAME } from '../../constants';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <>
        <hr className="m-0" style={{ background: 'white' }} />
        <footer className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.column}>
                    <a href="/terms-of-use">Regulamin</a>
                    <a href="/contact">Kontakt</a>
                </div>
                <div className={styles.column}>
                    <a href="/privacy-policy">Polityka prywatności</a>
                    <a href="/faq">FAQ</a>
                </div>
            </div>
            <div className={styles.copyright}>Copyright © {APP_NAME} 2021</div>
        </footer>
        </>
    );
}
export default Footer;