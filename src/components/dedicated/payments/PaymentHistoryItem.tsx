import React from 'react';
import styles from './PaymentHistoryItem.module.css';
import Moment from 'react-moment';
import 'moment/locale/pl';

interface Props {
    createdAt: string;
    netAmount: string;
    grossAmount: string;
    purchaserName: string;
}

const PaymentHistoryItem: React.FC<Props> = ({ createdAt, netAmount, grossAmount, purchaserName }) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.title}>Data:</div>
                <div className={styles.value}>
                    <Moment format="lll">{createdAt}</Moment>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>kwota brutto:</div>
                <div className={styles.value}>{grossAmount} PLN</div>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>kwota netto:</div>
                <div className={styles.value}>{netAmount} PLN</div>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>klient:</div>
                <div className={styles.value}>{purchaserName}</div>
            </div>
        </div>
    );
}
export default PaymentHistoryItem;