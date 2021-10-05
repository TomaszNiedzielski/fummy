import React from 'react';
import Spinner from '../../loaders/spinner/Spinner';
import styles from './PrimaryButton.module.css';

interface Props {
    type?: "button" | "submit" | "reset";
    title: string;
    attributes?: object;
    style?: object;
    onClick?: () => void;
    isLoading?: boolean;
}

const PrimaryButton: React.FC<Props> = ({ type, title, attributes, style, onClick, isLoading }) => {
    return (
        <button type={type} { ...attributes } style={style} className={styles.button} onClick={onClick}>
            {isLoading ? <Spinner /> : title}
        </button>
    );
}
export default PrimaryButton;