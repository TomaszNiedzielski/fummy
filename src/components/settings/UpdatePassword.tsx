import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loginPasswordRules, passwordRules } from '../../helpers/ValidationRules';
import { RootState } from '../../redux/store';
import PrimaryButton from '../buttons/primary/PrimaryButton';
import PrimaryInput from '../inputs/primary/PrimaryInput';
import { toast } from 'react-toastify';
import { post, Response } from '../../helpers/ApiRequest';

const UpdatePassword: React.FC = () => {
    const { token } = useSelector((state: RootState) => state.auth);

    const [currentPassword, setCurrentPassword] = useState<string>();
    const [newPassword, setNewPassword] = useState<string>();
    const [currentPasswordError, setCurrentPasswordError] = useState<string>();
    const [newPasswordError, setNewPasswordError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);

    const save = () => {
        if(!isFormCorrect()) return;

        setIsLoading(true);

        post('password/update?token='+token, { currentPassword, newPassword })
        .then((response: Response) => {
            setCurrentPasswordError(null);

            if(response.code === 200) {
                setCurrentPassword(null);
                setNewPassword(null);

                toast.success('Hasło zostało zaaktualizowane!');
            }
        })
        .catch(({ response }) => {
            const { currentPassword } = response.data.errors;

            setCurrentPasswordError(currentPassword);
        })
        .then(() => setIsLoading(false));
    }

    const isFormCorrect = () => {        
        setCurrentPasswordError(loginPasswordRules(currentPassword));
        setNewPasswordError(passwordRules(newPassword));

        if(!currentPassword || !newPassword || currentPasswordError || newPasswordError) {
            return false;
        }
        
        return true;
    }

    useEffect(() => {
        if(currentPasswordError) setCurrentPasswordError(loginPasswordRules(currentPassword));
    }, [currentPassword]);

    useEffect(() => {
        if(newPasswordError) setNewPasswordError(passwordRules(newPassword));
    }, [newPassword]);

    return (
        <section className="w-100 primary-box">
            <h5>Zmień hasło</h5>
            <div className="w-100 d-md-flex">
                <div className="w-100 mr-md-2">
                    <PrimaryInput
                        type="password"
                        label="Aktualne hasło"
                        value={currentPassword}
                        onChange={newValue => setCurrentPassword(newValue)}
                        onBlur={() => setCurrentPasswordError(loginPasswordRules(currentPassword))}
                        errorMessage={currentPasswordError}
                    />
                </div>
                <div className="w-100 ml-md-2">
                    <PrimaryInput
                        type="password"
                        label="Nowe hasło"
                        value={newPassword}
                        onChange={newValue => setNewPassword(newValue)}
                        onBlur={() => setNewPasswordError(passwordRules(newPassword))}
                        errorMessage={newPasswordError}
                    />
                </div>
            </div>
            {currentPassword && newPassword && <div className="w-100 d-flex justify-content-center justify-content-md-end mt-3">
                <PrimaryButton
                    title="Zapisz"
                    onClick={save}
                    isLoading={isLoading}
                />
            </div>}
        </section>
    );
}
export default UpdatePassword;