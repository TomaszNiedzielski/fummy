import React, { useState, useEffect } from 'react';
import styles from './Navigator.module.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const [subpage, setSubpage] = useState('');

    const location = useLocation();

    useEffect(() => {
        const { href } = window.location;
        const subpage = href.split('/').pop();

        setSubpage(subpage);
    }, [location]);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h6 className={styles.title}>Twoje zamówienia</h6>
                <ul className={styles.list}>
                    <li style={subpage === '' ? selectedStyle : {}}>
                        <Link to="/">aktualne</Link>
                    </li>
                    <li style={subpage === 'completed' ? selectedStyle : {}}>
                        <Link to="/completed">zrealizowane</Link>
                    </li>
                    <li style={subpage === 'uncompleted' ? selectedStyle : {}}>
                        <Link to="/uncompleted">niezrealizowane</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

const selectedStyle = {
    border: '1px solid rgba(var(--global-primary-color-rgb), .2)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
}

export default Sidebar;