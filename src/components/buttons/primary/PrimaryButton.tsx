import React from 'react';
import Spinner from '../../loaders/spinner/Spinner';
import styles from './PrimaryButton.module.css';

export interface Props {
    type?: "button" | "submit" | "reset";
    title: string | React.FC;
    attributes?: object;
    style?: object;
    onClick?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
}

const PrimaryButton: React.FC<Props> = ({ type, title, attributes, style, onClick, isLoading, disabled }) => {
    const Title = title;
    return (
        <button type={type} { ...attributes } style={style} className={styles.button} onClick={onClick} disabled={disabled}>
            {isLoading ? <Spinner /> : (typeof title === 'function' ? <Title /> : title)}
        </button>
    );
}
export default PrimaryButton;