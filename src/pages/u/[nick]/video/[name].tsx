import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import VideoPlayer from '../../../../components/dedicated/video_player/VideoPlayer';
import { API_STORAGE } from '../../../../constants';

const VideoPage: React.FC = (props) => {
    const [name, setName] = useState<string>();

    const router = useRouter();

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        
        return () => {
            if(typeof document !== 'undefined') {
                document.body.classList.remove('overflow-hidden');
            }
        }
    }, []);

    useEffect(() => {
        const videoName = window.location.href.split('/').pop();

        setName(videoName);
    }, []);

    useEffect(() => {
        const handleEsc = (e: any) => {
            if(e.keyCode === 27) {
                router.back();
            }
        }

        window.addEventListener('keydown', handleEsc);
    
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div style={styles.container} className="position-fixed">
            {name && <VideoPlayer
                source={`${API_STORAGE}videos/${name}`}
                thumbnail={`${API_STORAGE}thumbnails/${name.slice(0, -4)}.png`}
            />}
        </div>
    );
}
const styles = {
    container: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
    }
}
export default VideoPage;