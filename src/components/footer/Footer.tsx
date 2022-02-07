import React from 'react';
import { APP_NAME } from '../../constants';
import styles from './Footer.module.css';
import Link from 'next/link';
import PrimaryButton from '../buttons/primary/PrimaryButton';
import NewsletterForm from '../dedicated/newsletter_form/NewsletterForm';

const Footer: React.FC = () => {
    return (
        <>
        <hr className="m-0" style={{ background: 'rgba(var(--global-primary-color-rgb), 0.1)' }} />
        <footer className={styles.footer}>
            <div>
                <div className={styles.newsletter}>
                    <div>Zapisz się na newsletter!</div>
                    <NewsletterForm />
                </div>
                <div className="d-flex flex-column align-items-center align-items-lg-start">
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
                    <div className={styles.copyright}>Copyright © {APP_NAME} 2021 - 2022</div>
                </div>
            </div>
            <div className="d-none d-lg-block">
                <div className="mb-2">Chcesz zostać twórcą na Fummy?</div>
                <PrimaryButton title="Dołącz jako influencer" attributes={{ 'data-toggle': 'modal', 'data-target': '#registerModal' }} />
            </div>
        </footer>
        </>
    );
}
export default Footer;