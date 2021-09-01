import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LoadingBar: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const handleRouteStart = () => {
            setIsLoading(true);
        }

        const handleRouteComplete = () => {
            setIsLoading(false);
        }

        router.events.on('routeChangeStart', handleRouteStart);
        router.events.on('routeChangeComplete', handleRouteComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteStart);
            router.events.off('routeChangeComplete', handleRouteComplete);
        }
    }, []);

    return (
        <div style={styles.container}>
            <div style={{
                ...styles.content,
                marginLeft: isLoading ? '0px' : '-100vw',
                transition: isLoading ? 'margin-left 2s' : 'none' }}>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '100%',
        height: '4px',
        position: 'fixed' as 'fixed',
        top: 0,
        zIndex: 1050
    },
    content: {
        backgroundColor: 'var(--global-primary-color)',
        height: '100%',
        width: '100vw',
    }
}
export default LoadingBar;