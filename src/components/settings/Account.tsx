import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user/Auth';
import EditButton from '../buttons/edit/EditButton';

const Account: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <section className="w-100 primary-box mt-3">
            <h5>Konto</h5>
            <EditButton
                title="wyloguj się"
                style={{ padding: '10px', height: 'unset' }}
                onClick={() => dispatch(logout())}
            />
        </section>
    );
}
export default Account;