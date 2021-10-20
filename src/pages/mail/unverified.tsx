import React, { useState, useEffect } from 'react';
import PrimaryButton from '../../components/buttons/primary/PrimaryButton';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { post, Response } from '../../helpers/ApiRequest';
import Cookies from 'universal-cookie';

const UnverifiedPage = () => {
    const { token } = useSelector((state: RootState) => state.auth);
    const { isMailVerified, nick } = useSelector((state: RootState) => state.profile);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(isMailVerified) {
            window.location.href = '/u/'+nick;
        }
    }, [isMailVerified]);

    const sendVerificationMail = () => {
        setIsLoading(true);

        post('mail/send/verification-mail?token='+token)
        .then((response: Response) => {
            setIsLoading(false);

            if(response.code === 200) {
                toast.success(response.data);
            }
        })
        .catch(() => setIsLoading(false));
    }

    return (
        <div className="container d-flex flex-column align-items-center mt-2 mt-md-5">
            <div>Sprawdź swoją skrzynkę pocztową i potwierdź adres e-mail, aby kontynuować.</div>
            <small className="mt-4 mb-2">E-mail nie dotarł?</small>
            <PrimaryButton
                title="Wyślij ponownie"
                onClick={sendVerificationMail}
                isLoading={isLoading}
            />
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

export default UnverifiedPage;