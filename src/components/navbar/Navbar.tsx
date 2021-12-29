import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { logout } from '../../redux/actions/user/Auth';
import SearchInput from '../inputs/search/SearchInput';
import SearchResultsModal from '../modals/SearchResultsModal';
import { RootState } from '../../redux/store';
import { APP_NAME } from '../../constants';
import MenuModal from '../modals/menu/MenuModal';
import LoadingBar from '../loaders/bar/LoadingBar';
import HamburgerButton from '../buttons/hamburger/HamburgerButton';

const Navbar: React.FC = () => {
    const { auth } = useSelector((state: RootState) => state);
    const { fullName, nick } = useSelector((state: RootState) => state.profile);

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const dispatch = useDispatch();

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
                        <li className={styles.item}>
                            <span className="dropdown-toggle" data-toggle="dropdown">{fullName}</span>

                            <div className={styles.dropdown + " dropdown-menu dropdown-menu-right"}>
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
                            </div>
                        </li>
                    }
                </ul>
            </div>
        </nav>
        <SearchResultsModal />
        <MenuModal isVisible={isMenuVisible} onChange={isVisible => setIsMenuVisible(isVisible)} />
        </>
    );
}
export default Navbar;