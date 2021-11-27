import React from 'react';
import Cookies from 'universal-cookie';
import UpdatePassword from '../components/settings/UpdatePassword';
import ActivityStatus from '../components/settings/ActivityStatus';
import _24HrDelivery from '../components/settings/24HrDelivery';
import PaymentProfile from '../components/settings/PaymentProfile';

const SettingsPage: React.FC = () => {
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center py-3 mx-auto" style={{ maxWidth: '550px' }}>
                <h3 className="mb-3">Ustawienia</h3>
                <UpdatePassword />
                <ActivityStatus />
                <_24HrDelivery />
                <PaymentProfile />
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