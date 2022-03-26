import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import UpdatePassword from '../components/settings/UpdatePassword';
import ActivityStatus from '../components/settings/ActivityStatus';
import _24HrDelivery from '../components/settings/24HrDelivery';
import PaymentProfile from '../components/settings/PaymentProfile';
import { useRouter } from 'next/router';
import Account from '../components/settings/Account';

const SettingsPage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        if(router.query.scroll === 'payment-profile') {
            const paymentProfileEl = document.getElementById('payment_profile');
            paymentProfileEl.scrollIntoView();
        }
    }, [router.query]);

    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center py-3 mx-auto" style={{ maxWidth: '550px' }}>
                <h3 className="mb-3">Ustawienia</h3>
                <input type="email" style={{ width: 0, height: 0, padding: 0, border: 'none' }} />
                <UpdatePassword />
                <ActivityStatus />
                <_24HrDelivery />
                <PaymentProfile />
                <Account />
            </div>
        </div>
    );
}

export const getServerSideProps = async ({ req }) => {
    const token = new Cookies(req.headers.cookie).get('token');

    if(!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return { props: {} }
}

export default SettingsPage;