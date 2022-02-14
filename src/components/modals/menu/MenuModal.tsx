import React, { useEffect } from 'react';
import styles from './MenuModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { logout } from '../../../redux/actions/user/Auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HamburgerButton from '../../buttons/hamburger/HamburgerButton';

interface Props {
    isVisible: boolean;
    onChange: (isVisible: boolean) => void;
    newOrdersNumber: number;
}

const MenuModal: React.FC<Props> = ({ isVisible, onChange, newOrdersNumber }) => {
    const auth = useSelector((state: RootState) => state.auth);
    const profile = useSelector((state: RootState) => state.profile);

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if(isVisible) {
            document.body.classList.add('overflow-hidden');
        } else if(typeof document !== 'undefined') {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isVisible]);

    useEffect(() => {
        const handleRouteChange = () => {
            onChange(false);
        }
    
        router.events.on('routeChangeStart', handleRouteChange);
    
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, [onChange]);

    return (
        <>
        {isVisible && <div className={styles.overlay} onClick={() => onChange(false)}></div>}
        <div className={styles.container + ' ' + (isVisible ? styles.visible : '')}>
            <div className={styles.header}>
                <HamburgerButton
                    onClick={() => onChange(false)}
                    isOpen={true}
                />
            </div>
            <hr className={styles.hr} />
            <div className="d-flex flex-column align-items-center px-2">
                {auth.token ?
                    <div className="w-100">
                        <Link href={"/u/" + profile.nick}>
                            <a className={styles.item}>
                                <img src="/icons/user.svg" alt="user" className={styles.icon} />
                                <span className="ml-2">{profile.fullName}</span>
                            </a>
                        </Link>
                        <Link href="/orders">
                            <a className={styles.item}>
                                <img src="/icons/clipboard.png" alt="user" className={styles.icon} />
                                <span className="ml-2">Zamówienia</span>
                                {newOrdersNumber ? <span className="badge primary-color-background accent-color ml-2" style={{ fontSize: '12px' }}>{newOrdersNumber}</span> : null}
                            </a>
                        </Link>
                        <Link href="/my-money">
                            <a className={styles.item}>
                                <img src="/icons/money.svg" alt="user" className={styles.icon} />
                                <span className="ml-2">Stan portfela</span>
                            </a>
                        </Link>
                        <Link href="/settings">
                            <a className={styles.item}>
                                <img src="/icons/settings.svg" alt="user" className={styles.icon} />
                                <span className="ml-2">Ustawienia</span>
                            </a>
                        </Link>
                        <div className="w-100">
                            <hr className={styles.hr} />
                            <div onClick={() => dispatch(logout())}>
                                <img src="/icons/logout.svg" alt="user" className={styles.icon} />
                                <span className="ml-2" data-dismiss="modal">Wyloguj się</span>
                            </div>
                        </div>
                    </div>
                    : <div>
                        <div className={styles.item}>
                            <span className="ml-2" data-dismiss="modal" data-toggle="modal" data-target="#loginModal">Zaloguj się</span>
                        </div>
                        <div className={styles.item}>
                            <span className="ml-2" data-dismiss="modal" data-toggle="modal" data-target="#registerModal">Dołącz jako influencer</span>
                        </div>
                    </div>
                }
            </div>
        </div>
        </>
    );
}
export default MenuModal;