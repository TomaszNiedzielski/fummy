import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { post } from '../../../helpers/ApiRequest';
import { emailRules } from '../../../helpers/ValidationRules';
import ConfirmButton from '../../buttons/confirm/ConfirmButton';
import PrimaryInput from '../../inputs/primary/PrimaryInput';

const NewsletterButtonContent: React.FC = () => {
    return (
        <img src="/icons/right-arrow.svg" alt="arrow right" style={{ height: '30px' }} />
    );
}

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [emailError, setEmailError] = useState<string>();

    const saveEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isFormCorrect()) return;

        post('mailing-address', { email })
        .then(() => {
            setEmail('');
            toast.success('Twój e-mail został zapisany do newslettera.');
        });
    }

    const isFormCorrect = () => {    
        const emailError = emailRules(email);    
        setEmailError(emailError);

        if (!email || emailError) {
            return false;
        }
        
        return true;
    }

    return (
        <form className="d-flex align-items-start justify-content-center" onSubmit={saveEmail}>
            <PrimaryInput
                type="email"
                placeholder="Podaj swój adres e-mail"
                onChange={newValue => setEmail(newValue)}
                value={email}
                errorMessage={emailError}
            />
            <ConfirmButton
                type="submit"
                title={NewsletterButtonContent}
                style={{ margin: '12px 0 0 10px', padding: '8px' }}
            />
        </form>
    );
}
export default NewsletterForm;