import React, { useEffect } from 'react';
import styles from './MenuModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { logout } from '../../../redux/actions/user/Auth';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    isVisible: boolean;
    onChange: (isVisible: boolean) => void;
}

const MenuModal: React.FC<Props> = ({ isVisible, onChange }) => {
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
                <button type="button" className="close" style={{ fontSize: '60px' }} onClick={() => onChange(false)}>
                    <span aria-hidden="true" className="primary-color">&times;</span>
                </button>
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
                                <img src="/icons/suitcase.svg" alt="user" className={styles.icon} />
                                <span className="ml-2">Zamówienia</span>
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