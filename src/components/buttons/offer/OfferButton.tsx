import React from 'react';
import styles from './OfferButton.module.css';
import Link from 'next/link';

interface Props {
    title: string;
    price?: number | string;
    currency?: string;
    style?: object;
    attributes?: object;
    link?: string;
    selected?: boolean;
    onClick?: () => void;
}

const Content: React.FC<Props> = ({ title, price, currency, style, attributes, onClick }) => (
    <div {...attributes}>
        <div className={styles.content} style={style} onClick={onClick}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price && price + ' ' + currency}</div>
        </div>
    </div>
);

const OfferButton: React.FC<Props> = ({ title, price, currency, style, attributes, link, selected, onClick }) => {
    if(link) {
        return (
            <Link href={link}>
                <a className={styles.container}>
                    <Content
                        title={title}
                        price={price}
                        currency={currency}
                        style={style}
                        attributes={attributes}
                        selected={selected}
                    />
                </a>
            </Link>
        );
    }
    
    return (
        <div className={styles.container}>
            <Content
                title={title}
                price={price}
                currency={currency}
                style={style}
                attributes={attributes}
                selected={selected}
                onClick={onClick}
            />
        </div>
    );
}
export default OfferButton;