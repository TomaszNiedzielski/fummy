import React from 'react';
import styles from './VideoPlayer.module.css';

interface Props {
    source: string;
    thumbnail?: string;
}

const VideoPlayer: React.FC<Props> = ({ source, thumbnail }) => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <img src={thumbnail} alt="background" />
            </div>
            <video src={source} className={styles.player} controls loop autoPlay />
        </div>
    );
}
export default VideoPlayer;