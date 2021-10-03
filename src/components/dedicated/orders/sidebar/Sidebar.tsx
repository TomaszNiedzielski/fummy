import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { OrdersView } from '../../../../pages/orders';
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
            <ul className={styles.list}>
                <li style={subpage === '' ? { backgroundColor: 'rgba(0, 0, 0, 0.2)' } : {}}>
                    <Link to="/">aktualne</Link>
                </li>
                <li style={subpage === 'completed' ? { backgroundColor: 'rgba(0, 0, 0, 0.2)' } : {}}>
                    <Link to="/completed">zrealizowane</Link>
                </li>
                <li style={subpage === 'uncompleted' ? { backgroundColor: 'rgba(0, 0, 0, 0.2)' } : {}}>
                    <Link to="/uncompleted">niezrealizowane</Link>
                </li>
            </ul>
        </section>
    );
}
export default Sidebar;