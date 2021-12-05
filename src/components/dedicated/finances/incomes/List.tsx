import React from 'react';
import styles from '../List.module.css';
import Moment from 'react-moment';
import 'moment/locale/pl';

export interface Item {
    createdAt: string;
    netAmount: string;
    grossAmount: string;
    purchaserName: string;
}

const IncomesHistoryList: React.FC<{ list: Item[] }> = ({ list }) => {
    return (
        <div className={styles.container}>
            {list.length > 0 ? list.map(({ createdAt, netAmount, grossAmount, purchaserName}, i: number) => (
                <div className={styles.item}>
                    <div className="my-2">
                        <div className={styles.title}>Data:</div>
                        <div>
                            <Moment format="lll">{createdAt}</Moment>
                        </div>
                    </div>
                    <div className="my-2">
                        <div className={styles.title}>kwota brutto:</div>
                        <div>{grossAmount} PLN</div>
                    </div>
                    <div className="my-2">
                        <div className={styles.title}>kwota netto:</div>
                        <div>{netAmount} PLN</div>
                    </div>
                    <div className="my-2">
                        <div className={styles.title}>klient:</div>
                        <div>{purchaserName}</div>
                    </div>
                </div>
            )) : <div>
                <h6 className="text-center mb-0">Brak przychodów</h6>
            </div>}
        </div>
    );
}
export default IncomesHistoryList;