import React, { useState, useEffect } from 'react';
import PrimaryButton from '../../components/buttons/primary/PrimaryButton';
import PrimaryInput from '../../components/inputs/primary/PrimaryInput';
import { emailRules } from '../../helpers/ValidationRules';
import { post } from '../../helpers/ApiRequest';
import { toast } from 'react-toastify';

const PasswordResetPage = () => {
    const [email, setEmail] = useState<string>();
    const [emailError, setEmailError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const resetPassword = () => {
        if(!isFormCorrect()) return;

        setIsLoading(true);

        post('password/send-reset-link', { email })
        .then((response: any) => {
            if(response.code === 200) {
                setIsEmailSent(true);
            }
        })
        .catch(({ response }) => {
            toast.info(response.data.message);
        })
        .then(() => setIsLoading(false));
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
        <div className="container text-white d-flex flex-column align-items-center mt-2 mt-md-5">
            {!isEmailSent ? <>
            <h4>Reset hasła</h4>
            <div className="text-md-center">Podaj swój email, a my wyślemy Ci link do resetu hasła. <br className="d-none d-md-block" /> Będzie ważny przez 14 dni.</div>
            <div className="w-100 w-sm-50 mb-3">
                <PrimaryInput
                    type="email"
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
            <div className="d-flex flex-column align-items-center">
                <div className="text-md-center mb-3">E-mail z linkiem do resetu hasła został wysłany na podany adres.</div>
                <PrimaryButton
                    title="Nie dostałeś maila?"
                    onClick={() => setIsEmailSent(false)}
                />
            </div>}
        </div>
    );
}
export default PasswordResetPage;