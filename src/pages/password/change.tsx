import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PrimaryButton from '../../components/buttons/primary/PrimaryButton';
import PrimaryInput from '../../components/inputs/primary/PrimaryInput';
import { post } from '../../helpers/ApiRequest';
import { passwordRules } from '../../helpers/ValidationRules';
import { RootState } from '../../redux/store';

const PasswordChangePage = () => {
    const [key, setKey] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string>();

    const { token } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if(token) window.location.href = '/';
    }, [token]);

    useEffect(() => {
        const { searchParams } = new URL(window.location.href);
        const key = searchParams.get('key');

        if(!key) {
            window.location.href = '/';
        }

        setKey(key);
    }, []);

    const changePassword = () => {
        if(!isFormCorrect()) return;

        setIsLoading(true);

        post('password/reset', { password, key })
        .then((response: any) => {
            const { code, data } = response;

            if(code === 200) {
                setResponseMessage(data);
            }
        })
        .catch(({ response }) => {
            toast.error(response.data.message);
        })
        .then(() => setIsLoading(false));
    }

    useEffect(() => {
        if(passwordError) setPasswordError(passwordRules(password));
    }, [password]);

    const isFormCorrect = () => {        
        setPasswordError(passwordRules(password));

        if(!password || passwordError) {
            return false;
        }

        return true;
    }

    return (
        <div className="container text-white d-flex flex-column align-items-center pt-5">
            {!responseMessage ? <><h4>Reset hasła</h4>
            <div className="w-100 w-md-50 mb-3">
                <PrimaryInput
                    label="Podaj nowe hasło"
                    value={password}
                    type="password"
                    onChange={newValue => setPassword(newValue)}
                    errorMessage={passwordError}
                    onBlur={() => setPasswordError(passwordRules(password))}
                />
            </div>
            <PrimaryButton
                title="Zapisz"
                onClick={changePassword}
                isLoading={isLoading}
            /></> : <>
            <h6>{responseMessage}</h6>
            <button className="text-white border p-2 mt-3 rounded bg-transparent" data-toggle="modal" data-target="#loginModal">Zaloguj się</button>
            </>}
        </div>
    );
}
export default PasswordChangePage;