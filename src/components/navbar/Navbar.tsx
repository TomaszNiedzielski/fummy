import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import SearchInput from '../inputs/search/SearchInput';
import SearchResultsModal from '../modals/SearchResultsModal';
import { RootState } from '../../redux/store';
import { APP_NAME } from '../../constants';
import MenuModal from '../modals/menu/MenuModal';
import LoadingBar from '../loaders/bar/LoadingBar';
import HamburgerButton from '../buttons/hamburger/HamburgerButton';
import { get, Response } from '../../helpers/ApiRequest';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
    const { auth, profile: { nick } } = useSelector((state: RootState) => state);

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [newOrdersNumber, setNewOrdersNumber] = useState(0);

    const router = useRouter();

    useEffect(() => {
        if(!auth.token) return;

        get('notifications')
        .then((response: Response) => {
            const { code, data } = response;

            if(code === 200) {
                setNewOrdersNumber(data.notifications.orders.number);
            }
        });
    }, [auth.token, router.pathname]);

    return (
        <>
        <LoadingBar />
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between wrapper my-0 dark-color-background sticky-top flex-nowrap">
            <div className={styles.shadow}></div>
            <Link href="/">
                <a>
                    <div className="d-flex align-items-center">
                        <img src="/icons/logo.png" className={styles.logo} />
                        <div className={styles.appName}>{APP_NAME}</div>
                    </div>
                </a>
            </Link>

            <SearchInput />

            <div className="d-flex justify-content-center d-lg-none">
                <HamburgerButton
                    onClick={() => setIsMenuVisible(true)}
                    isOpen={false}
                />
            </div>

            <div className="d-md-none d-sm-none d-none d-lg-block">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {!auth.token ?
                        <>
                        <li className={styles.item} style={{ marginRight: '1rem' }}>
                            <span data-toggle="modal" data-target="#loginModal">Zaloguj się</span>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.registerLink} data-toggle="modal" data-target="#registerModal">Dołącz jako influencer</span>
                        </li>
                        </> :
                        <>
                        <li className={styles.item}>
                            <Link href={"/orders"}>
                                <a className={styles.itemIcon}>
                                    <img src="/icons/clipboard.png" alt="suitcase" />
                                    {newOrdersNumber ? <span className={styles.badge + " badge"}>{newOrdersNumber}</span> : null}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href={"/my-money"}>
                                <a className={styles.itemIcon}>
                                    <img src="/icons/money.svg" alt="suitcase" />
                                </a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/settings">
                                <a className={styles.itemIcon}>
                                    <img src="/icons/settings.svg" alt="suitcase" />
                                </a>
                            </Link>
                        </li>
                        <li className={styles.item + " ml-4"}>
                            <Link href={"/u/" + nick}>
                                <a>
                                    <span>{nick}</span>
                                </a>
                            </Link>


                            {/* <span className="dropdown-toggle" data-toggle="dropdown">{fullName}</span> */}

                            {/* <div className={styles.dropdown + " dropdown-menu dropdown-menu-right"}>
                                <div className={styles.dropdownItem}>
                                    <Link href={"/u/" + nick}>
                                        <a>
                                            <img src="/icons/user.svg" alt="user" />
                                            <span>{fullName}</span>
                                        </a>
                                    </Link>
                                </div>

                                <div className={styles.divider}></div>

                                <div className={styles.dropdownItem}>
                                    <Link href={"/orders"}>
                                        <a>
                                            <img src="/icons/clipboard.png" alt="suitcase" />
                                            <span>Zamówienia</span>
                                            {newOrdersNumber ? <span className="badge primary-color-background accent-color ml-2" style={{ fontSize: '12px' }}>{newOrdersNumber}</span> : null}
                                        </a>
                                    </Link>
                                </div>

                                <div className={styles.divider}></div>

                                <div className={styles.dropdownItem}>
                                    <Link href="/my-money">
                                        <a>
                                            <img src="/icons/money.svg" alt="money" />
                                            <span>Stan Portfela</span>
                                        </a>
                                    </Link>
                                </div>

                                <div className={styles.divider}></div>

                                <div className={styles.dropdownItem}>
                                    <Link href="/settings">
                                        <a>
                                            <img src="/icons/settings.svg" alt="settings" />
                                            <span>Ustawienia</span>
                                        </a>
                                    </Link>
                                </div>

                                <div className={styles.divider}></div>

                                <div className={styles.dropdownItem} onClick={() => dispatch(logout())}>
                                    <a>
                                        <img src="/icons/logout.svg" alt="logout" />
                                        <span className="text-white">Wyloguj się</span>
                                    </a>
                                </div>
                            </div> */}
                        </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
        <SearchResultsModal />
        <MenuModal
            isVisible={isMenuVisible}
            onChange={isVisible => setIsMenuVisible(isVisible)}
            newOrdersNumber={newOrdersNumber}
        />
        </>
    );
}
export default Navbar;