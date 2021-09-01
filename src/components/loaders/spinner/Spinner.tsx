import React from 'react';
import styles from './Spinner.module.css';

interface Props {
    style?: object;
}

const Spinner: React.FC<Props> = ({ style }) => (
    <div className={styles.loader} style={style}></div>
);
export default Spinner;