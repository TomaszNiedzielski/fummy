import React from 'react';
import styles from './TopbarNavigator.module.css';
import { Link, useLocation } from 'react-router-dom';

interface Props {
    links: {
        title: string;
        href: string;
    }[];
}

const TopbarNavigator: React.FC<Props> = ({ links }) => {
    const location = useLocation();

    return (
        <div className={styles.container}>
            {links.map(({ title, href }) => (
                <div className={styles.item +' '+ (location.pathname.slice(1) === href ? styles.active : '')}>
                    <Link to={href}>{title}</Link>
                </div>
            ))}
        </div>
    );
}
export default TopbarNavigator;