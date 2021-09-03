import React from 'react';
import { APP_NAME } from '../../constants';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <>
        <hr className="m-0" style={{ background: 'white' }} />
        <footer className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.column}>
                    <Link href="/terms-of-use">
                        <a>Regulamin</a>
                    </Link>
                    <Link href="/contact">
                        <a>Kontakt</a>
                    </Link>
                </div>
                <div className={styles.column}>
                    <Link href="/privacy-policy">
                        <a>Polityka prywatności</a>
                    </Link>
                    <Link href="/faq">
                        <a>FAQ</a>                    
                    </Link>
                </div>
            </div>
            <div className={styles.copyright}>Copyright © {APP_NAME} 2021</div>
        </footer>
        </>
    );
}
export default Footer;