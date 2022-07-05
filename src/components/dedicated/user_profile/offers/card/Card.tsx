import React from 'react';
import styles from './Card.module.css';

interface Props {
    title: string;
    price: number;
    description: string;
    onClick: () => void;
    isSelected: boolean;
    style?: object;
}

const Card: React.FC<Props> = ({ title, price, description, onClick, isSelected, style }) => {
    return (
        <div className={styles.container} style={isSelected ? selectedStyle : style} onClick={onClick}>
            <div className="d-flex justify-content-between">
                <div>{title}</div>
                <div>{price} PLN</div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    );
}
const selectedStyle = {
    boxShadow: '0 0 3pt 1pt var(--global-primary-color)'
}
export default Card;