import React from 'react';
import { useRouter } from 'next/router';

const BookedPage: React.FC = () => {
    const router = useRouter();
    const { nick, delivery } = router.query;

    return (
        <div className="container d-flex flex-column justify-content-lg-center align-items-center">
            <img src="/icons/champagne.png" alt="champagne" style={{ height: '150px' }} />
            <h6 className="mt-4 text-center">Gratulacje! W ciągu {delivery === '24h' ? '24 godzin' : '7 dni'} otrzymasz video od {nick}.</h6>
        </div>
    );
}
export default BookedPage;