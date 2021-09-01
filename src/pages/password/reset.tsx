import React, { useState, useEffect } from 'react';
import PrimaryButton from '../../components/buttons/primary/PrimaryButton';
import PrimaryInput from '../../components/inputs/primary/PrimaryInput';
import { emailRules } from '../../helpers/ValidationRules';
import { post } from '../../helpers/ApiRequest';
import { toast } from 'react-toastify';

const PasswordResetPage = () => {
    const [email, setEmail] = useState<string>();
    const [emailError, setEmailError] = useState<string>();
    const [responseMessage, setResponseMessage] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);

    const resetPassword = () => {
        if(!isFormCorrect()) return;

        setIsLoading(true);

        post('password/send-reset-link', { email })
        .then((response: any) => {
            setIsLoading(false);
            const { code, data, message } = response;
            
            if(code === 200) {
                setResponseMessage(data);
            } else if(code === 500) {
                toast.error(message);
            }
        })
        .catch(() => setIsLoading(false));
    }

    const isFormCorrect = () => {        
        setEmailError(emailRules(email));

        if(!email || emailError) {
            return false;
        }

        return true;
    }

    useEffect(() => {
        if(emailError) setEmailError(emailRules(email));
    }, [email]);

    return (
        <div className="container text-white d-flex flex-column align-items-center pt-5">
            {!responseMessage ? <>
            <h4>Reset hasła</h4>
            <h6 className="text-center">Podaj swój email, a my wyślemy Ci link do resetu hasła. <br/> Będzie ważny przez 14 dni.</h6>
            <div className="w-100 w-sm-50 mb-3">
                <PrimaryInput
                    label="Adres e-mail"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    errorMessage={emailError}
                    onBlur={() => setEmailError(emailRules(email))}
                />
            </div>
            <PrimaryButton
                title="Resetuj"
                onClick={resetPassword}
                isLoading={isLoading}
            />
            </> :
            <h6>{responseMessage}</h6>}
        </div>
    );
}
export default PasswordResetPage;