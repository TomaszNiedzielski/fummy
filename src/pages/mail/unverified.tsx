import React, { useState, useEffect } from 'react';
import PrimaryButton from '../../components/buttons/primary/PrimaryButton';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { post, Response } from '../../helpers/ApiRequest';

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
        <>
        <div className="container d-flex flex-column align-items-center pt-5">
            <h5>Sprawdź swoją skrzynkę pocztową i potwierdź adres e-mail, aby kontynuować.</h5>
            <h6 className="mt-4 mb-2">E-mail nie dotarł?</h6>
            <PrimaryButton
                title="Wyślij ponownie"
                onClick={sendVerificationMail}
                isLoading={isLoading}
            />
        </div>
        </>
    );
}
export default UnverifiedPage;