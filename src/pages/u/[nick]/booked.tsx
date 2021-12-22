import React from 'react';
import { useRouter } from 'next/router';
import { post } from '../../../helpers/ApiRequest';

const BookedPage: React.FC<{ purchaseStatus: string }> = ({ purchaseStatus }) => {
    const router = useRouter();
    const { nick, delivery } = router.query;

    return (
        <div className="container d-flex flex-column justify-content-lg-center align-items-center">
            {purchaseStatus === 'paid' ? <>
                <img src="/icons/champagne.png" alt="champagne" style={{ height: '150px' }} />
                <h6 className="mt-4 text-center">Gratulacje! W ciągu {delivery === '24h' ? '24 godzin' : '7 dni'} otrzymasz video od {nick}.</h6>
            </> : <h6>Coś poszło nie tak.</h6>}
        </div>
    );
}
export const getServerSideProps = async ({ query }) => {
    const purchaseStatusRes: any = await post('orders/purchase/verify-status?purchase_key='+query.purchase_key);

    if(purchaseStatusRes.code === 200) {
        return {
            props: {
                purchaseStatus: purchaseStatusRes.data.status
            }
        }
    }
}
export default BookedPage;