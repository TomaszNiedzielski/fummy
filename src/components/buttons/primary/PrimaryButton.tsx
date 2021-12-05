import React from 'react';
import Spinner from '../../loaders/spinner/Spinner';
import styles from './PrimaryButton.module.css';

export interface Props {
    type?: "button" | "submit" | "reset";
    title: string;
    attributes?: object;
    style?: object;
    onClick?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
}

const PrimaryButton: React.FC<Props> = ({ type, title, attributes, style, onClick, isLoading, disabled }) => {
    return (
        <button type={type} { ...attributes } style={style} className={styles.button} onClick={onClick} disabled={disabled}>
            {isLoading ? <Spinner /> : title}
        </button>
    );
}
export default PrimaryButton;