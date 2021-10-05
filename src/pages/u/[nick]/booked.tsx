import React from 'react';

const BookedPage: React.FC<{ nick: string }> = ({ nick }) => {
    return (
        <div className="container d-flex flex-column justify-content-lg-center align-items-center">
            <img src="/icons/champagne.png" alt="champagne" style={{ height: '150px' }} />
            <h6 className="mt-4 text-center">Gratulacje! W ciągu 7 dni otrzymasz video od {nick}.</h6>
        </div>
    );
}

export const getServerSideProps = ({ params }) => {
    return {
        props: {
            nick: params.nick
        }
    }
}
export default BookedPage;