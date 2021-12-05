import React from 'react';
import styles from '../List.module.css';
import Moment from 'react-moment';
import 'moment/locale/pl';

export interface Item {
    createdAt: string;
    amount: number;
    isComplete: boolean;
}

const PayoutsHistoryList: React.FC<{ list: Item[] }> = ({ list }) => {
    return (
        <div className={styles.container}>
            {list.length ? list.map(({ createdAt, amount, isComplete }, i) => (
                <div className={styles.item}>
                    <div className="my-2">
                        <div className={styles.title}>Data wypłaty</div>
                        <div>
                            <Moment format="lll">{createdAt}</Moment>
                        </div>
                    </div>
                    <div className="my-2">
                        <div className={styles.title}>Kwota</div>
                        <div>{amount} PLN</div>
                    </div>
                    <div className="my-2">
                        <div className={styles.title}>Sposób</div>
                        <div>Przelew na konto bankowe</div>
                    </div>
                    <div className="my-2">
                        <div className={styles.title}>Status</div>
                        {isComplete
                            ? <div className="text-success">Zrealizowane</div>
                            : <div className="text-info">Oczekuje na realizację</div>
                        }
                    </div>
                </div>
            )) : <div>
                <h6 className="text-center mb-0">Brak wypłat</h6>
            </div>}
        </div>
    );
}
export default PayoutsHistoryList;