import React from 'react';
import styles from './Countdown.module.css';
import Countdown from 'react-countdown';

interface Props {
    date: string;
}

const Completionist = () => <div style={{ fontSize: '14px' }}>Czas upłynął!</div>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const color = days < 1 ? 'red' : (days < 4 ? 'yellow' : 'green');
    const backgroundColor = days < 1 ? 'rgba(255, 0, 0, .1)' : (days < 4 ? 'rgba(255, 255, 0, .1)' : 'rgba(0, 128, 0, .1)');
    
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <div className={styles.container} style={{ color }}>
                <div className={styles.item} style={{ backgroundColor }}>
                    <div>{days < 10 ? `0${days}` : days}</div>
                    <div>dni</div>
                </div>
                <div className={styles.item} style={{ backgroundColor }}>
                    <div>{hours < 10 ? `0${hours}` : hours}</div>
                    <div>godz.</div>
                </div>
                <div className={styles.item} style={{ backgroundColor }}>
                    <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
                    <div>min.</div>
                </div>
                <div className={styles.item} style={{ backgroundColor }}>
                    <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
                    <div>sek.</div>
                </div>
            </div>
        );
    }
}

const CountdownTimer: React.FC<Props> = ({ date }) => {
    return (
        <Countdown
            date={date.replace(' ', 'T')}
            renderer={renderer}
        />
    );
}
export default CountdownTimer;