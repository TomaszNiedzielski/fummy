import React from 'react';
import Spinner from '../../loaders/spinner/Spinner';
import styles from './PrimaryButton.module.css';

interface Props {
    title: String;
    attributes?: object;
    style?: object;
    onClick?: () => void;
    isLoading?: boolean;
}

const PrimaryButton: React.FC<Props> = ({ title, attributes, style, onClick, isLoading }) => {
    return (
        <button { ...attributes } style={style} className={styles.button} onClick={onClick}>
            {isLoading ? <Spinner /> : title}
        </button>
    );
}
export default PrimaryButton;