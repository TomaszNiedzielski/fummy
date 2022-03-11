import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import PrimaryButton from '../../buttons/primary/PrimaryButton';
import PrimaryInput from '../../inputs/primary/PrimaryInput';
import { useDispatch } from 'react-redux';
import { authSuccess } from '../../../redux/actions/user/Auth';
import { NICK_LENGTH } from '../../../constants';
import { fullNameRules, emailRules, nickRules, passwordRules } from '../../../helpers/ValidationRules';
import { post, Response } from '../../../helpers/ApiRequest';
import Checkbox from '../../inputs/checkbox/Checkbox';

const RegisterModalContent = () => {
    const [fullName, setFullName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [nick, setNick] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [isAgreed, setIsAgreed] = useState<boolean>();

    const [fullNameError, setFullNameError] = useState<string>();
    const [emailError, setEmailError] = useState<string>();
    const [nickError, setNickError] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();
    const [isAgreedError, setIsAgreedError] = useState<string>();

    const dispatch = useDispatch();

    const register = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!isFormCorrect()) return;

        setIsLoading(true);

        post('auth/register', { fullName, email, nick, password })
        .then((response: Response) => {
            if(response.code === 200) {
                dispatch(authSuccess(response.data.token));
                window.location.href = '/mail/unverified';
            }
        })
        .catch(({ response }) => {
            if(response.data.errors) {
                const { fullName, email, nick, password } = response.data.errors;

                setFullNameError(fullName);
                setEmailError(email);
                setNickError(nick);
                setPasswordError(password);
            }
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        if(fullNameError) setFullNameError(fullNameRules(fullName));
    }, [fullName]);

    useEffect(() => {
        if(emailError) setEmailError(emailRules(email));
    }, [email]);

    useEffect(() => {
        if(nickError) setNickError(nickRules(nick));
    }, [nick]);

    useEffect(() => {
        if(passwordError) setPasswordError(passwordRules(password));
    }, [password]);

    useEffect(() => {
        if(isAgreedError) setIsAgreedError(!isAgreed ? 'Musisz zaakceptować regulamin i politykę prywatności.' : '');
    }, [isAgreed]);

    const isFormCorrect = () => {
        setFullNameError(fullNameRules(fullName));
        setEmailError(emailRules(email));
        setNickError(nickRules(nick));
        setPasswordError(passwordRules(password));
        setIsAgreedError(!isAgreed ? 'Musisz zaakceptować regulamin i politykę prywatności.' : '');

        if(!fullName || !email || !nick || !password ||!isAgreed || fullNameError || emailError || nickError || passwordError) {
            return false;
        }
        
        return true;
    }

    return (
        <form className="d-flex flex-column align-items-center" onSubmit={register} noValidate>
            <PrimaryInput
                label="Imię i Nazwisko"
                placeholder="np. Monika Kowalska"
                value={fullName}
                onChange={newValue => setFullName(newValue)}
                errorMessage={fullNameError}
                onBlur={() => setFullNameError(fullNameRules(fullName))}
            />
            <PrimaryInput
                type="email"
                label="Adres e-mail"
                placeholder="np. monika.kowalska@onet.pl"
                value={email}
                onChange={newValue => setEmail(newValue)}
                errorMessage={emailError}
                onBlur={() => setEmailError(emailRules(email))}
            />
            <PrimaryInput
                label="Nick"
                placeholder="monika_kowalska"
                value={nick}
                onChange={newValue => setNick(newValue)}
                maxLength={NICK_LENGTH}
                errorMessage={nickError}
                onBlur={() => setNickError(nickRules(nick))}
                autoCapitalize="none"
            />
            <PrimaryInput
                type="password"
                label="Hasło"
                placeholder="Podaj swoje hasło"
                value={password}
                onChange={newValue => setPassword(newValue)}
                errorMessage={passwordError}
                onBlur={() => setPasswordError(passwordRules(password))}
            />
            <div className="d-flex w-100 mt-2">
                <Checkbox
                    value={isAgreed}
                    onChange={setIsAgreed}
                    label="Akceptuję regulamin i politykę prywatności."
                    errorMessage={isAgreedError}
                />
            </div>
            <div className="mt-3 w-75 d-flex justify-content-center mb-5">
                <PrimaryButton
                    type="submit"
                    title="Zarejestruj się"
                    isLoading={isLoading}
                />
            </div>
        </form>
    );
}
export default RegisterModalContent;