import React, { useState, useEffect } from 'react';

import PrimaryButton from '../../buttons/primary/PrimaryButton';
import PrimaryInput from '../../inputs/primary/PrimaryInput';

import { useDispatch } from 'react-redux';
import { authSuccess } from '../../../redux/actions/user/Auth';
import { emailRules, loginPasswordRules } from '../../../helpers/ValidationRules';
import { post, Response } from '../../../helpers/ApiRequest';
import Link from 'next/link';

interface LoginResponse extends Response {
    token: string;
}

const LoginModalContent = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>();

    const [emailError, setEmailError] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();

    const dispatch = useDispatch();

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!isFormCorrect()) return;

        setIsLoading(true);

        post('auth/login', { email, password })
        .then((response: LoginResponse) => {
            setIsLoading(false);

            if(response.code === 200) {
                dispatch(authSuccess(response.token));
                window.location.reload();
            } else if(response.errors) {
                const { email, password } = response.errors;

                setEmailError(email);
                setPasswordError(password);
            } else if(response.message) {
                setPasswordError(response.message);
            }
        })
        .catch((e) => {
            setIsLoading(false);
            setPasswordError(e.response.data.message);
        });
    }

    useEffect(() => {
        if(emailError) setEmailError(emailRules(email));
    }, [email]);

    useEffect(() => {
        if(passwordError) setPasswordError(loginPasswordRules(password));
    }, [password]);

    const isFormCorrect = () => {        
        setEmailError(emailRules(email));
        setPasswordError(loginPasswordRules(password));

        if(!email || !password || emailError || passwordError) {
            return false;
        }
        
        return true;
    }

    return (
        <form className="d-flex flex-column align-items-center" onSubmit={login} noValidate>
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
                type="password"
                label="Hasło"
                placeholder="Podaj swoje hasło"
                value={password}
                onChange={newValue => setPassword(newValue)}
                errorMessage={passwordError}
                onBlur={() => setPasswordError(loginPasswordRules(password))}
            />
            <div className="mt-3 w-75 d-flex flex-column align-items-center mb-5">
                <PrimaryButton
                    type="submit"
                    title="Zaloguj się"
                    isLoading={isLoading}
                />
                <small className="mt-3">
                    <Link href="/password/reset">
                        <a className="text-white" style={{ textDecorationLine: 'underline' }}>Nie pamiętasz hasła?</a>
                    </Link>
                </small>
            </div>
        </form>
    );
}
export default LoginModalContent;