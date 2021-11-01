import React from 'react';
import styles from './Info.module.css';

const Info: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>
                <h5 className="text-white">Co po zakupie?</h5>
                <div className={styles.item}>
                    <img src="/icons/time.png" alt="time" />
                    <div>Realizacja potrwa maksymalnie 7 dni.</div>
                </div>
                <div className={styles.item}>
                    <img src="/icons/email.png" alt="email" />
                    <div>Kiedy video będzie gotowe wyślemy Ci je mailem.</div>
                </div>
                <div className={styles.item}>
                    <img src="/icons/cashback.png" alt="cashback" />
                    <div>W przypadku nie zrealizowania zamówienia, zwrócimy Ci pieniądze.</div>
                </div>
            </div>
        </div>
    );
}
export default Info;