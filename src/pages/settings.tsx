import React from 'react';
import UpdatePassword from '../components/settings/update_password/UpdatePassword';
import Cookies from 'universal-cookie';

const SettingsPage: React.FC = () => {
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center p-3">
                <div>
                    <h3 className="mx-5">Ustawienia</h3>
                    <hr className="w-100 mb-4" style={{ borderColor: 'white' }} />
                </div>
                <UpdatePassword />
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
}

export default SettingsPage;