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
                        <div style={{
                            fontSize: '26px',
                            color: 'var(--global-primary-color)',
                            border: '2px solid var(--global-primary-color)',
                            padding: '0 8px',
                            borderRadius: '0.25rem',
                            height: '34px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>F</div>
                        <div className={styles.appName}>{APP_NAME}</div>
                    </div>
                </a>
            </Link>

            <SearchInput />

            <button className="navbar-toggler" style={{ backgroundColor: 'var(--global-primary-color)' }} onClick={() => setIsMenuVisible(true)}>
                <span className="navbar-toggler-icon"></span>
            </button>

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
                                <Link href={"/u/" + nick}>
                                    <a>
                                        <div className="dropdown-item">{fullName}</div>
                                    </a>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link href={"/orders"}>
                                    <a>
                                        <div className="dropdown-item">Zamówienia</div>
                                    </a>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link href="/my-money">
                                    <a>
                                        <div className="dropdown-item">Stan Portfela</div>
                                    </a>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link href="/settings">
                                    <a>
                                        <div className="dropdown-item">Ustawienia</div>
                                    </a>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <div className="dropdown-item cursor-pointer" onClick={() => dispatch(logout())}>Wyloguj się</div>
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