import React from 'react';
import styles from './Countdown.module.css';
import Countdown from 'react-countdown';

interface Props {
    date: string;
}

const Completionist = () => <div style={{ fontSize: '14px' }}>Czas upłynął!</div>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.item}>
                    <div>{days < 10 ? `0${days}` : days}</div>
                    <div>dni</div>
                </div>
                <div>:</div>
                <div className={styles.item}>
                    <div>{hours < 10 ? `0${hours}` : hours}</div>
                    <div>godzin</div>
                </div>
                <div>:</div>
                <div className={styles.item}>
                    <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
                    <div>minut</div>
                </div>
                <div>:</div>
                <div className={styles.item}>
                    <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
                    <div>sekund</div>
                </div>
            </div>
        );
    }
}

const CountdownTimer: React.FC<Props> = ({ date }) => {
    return (
        <Countdown
            date={date}
            renderer={renderer}
        />
    );
}
export default CountdownTimer;