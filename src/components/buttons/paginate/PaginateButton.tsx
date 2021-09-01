import React from 'react';
import Spinner from '../../loaders/spinner/Spinner';
import styles from './PaginateButton.module.css';

interface Props {
    onClick: () => void;
    isLoading?: boolean
}

const PaginateButton: React.FC<Props> = ({ onClick, isLoading }) => (
    !isLoading ? <button className={styles.button} onClick={onClick}>Pokaż więcej</button>
    : <Spinner />
);
export default PaginateButton;