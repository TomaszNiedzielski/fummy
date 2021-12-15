import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { get, post, Response } from '../../helpers/ApiRequest';
import { bankAccountHolderNameRules, bankAccountNumberRules } from '../../helpers/ValidationRules';
import { RootState } from '../../redux/store';
import PrimaryButton from '../buttons/primary/PrimaryButton';
import PrimaryInput from '../inputs/primary/PrimaryInput';

const LENGHTS_TO_ADD_SPACE = [2, 6, 10, 14, 18, 22, 26];
const NUMBER_REGEX = /^[0-9]+$/;

const PaymentProfile: React.FC = () => {
    const { token } = useSelector((state: RootState) => state.auth);
    const [bankAccountNumber, setBankAccountNumber] = useState<string>('');
    const [holderName, setHolderName] = useState<string>();
    const [bankAccountNumberError, setBankAccountNumberError] = useState<string>();
    const [holderNameError, setHolderNameError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitVisible, setIsSubmitVisible] = useState(false);

    useEffect(() => {
        if(!token) return;

        get('bank-account')
        .then((response: Response) => {
            if(response.code === 200 && response.data) {
                const { number, holderName } = response.data;

                setNumber(number);
                setHolderName(holderName)
                setIsSubmitVisible(false);
            }
        });
    }, [token]);

    const setNumber = (number: string) => {
        number = number.replace(/ /g, '');

        if(number.length > 26 || (number && !NUMBER_REGEX.test(number))) return;

        setIsSubmitVisible(true);

        let numberWithSpaces = '';
        for(let i = 0; i <= 26; i++) {
            if(LENGHTS_TO_ADD_SPACE.includes(i)) {
                const start = i === 2 ? 0 : i-4;
                numberWithSpaces = numberWithSpaces+number.slice(start, i)+(number.length >= (i>2 && i+1) ? ' ' : '');
            }
        }
        numberWithSpaces = numberWithSpaces.trim();

        setBankAccountNumber(numberWithSpaces);
    }

    const updateBankAccountDetails = () => {
        if(!isFormCorrect()) return;
        
        setIsLoading(true);
        post('bank-account', {
            number: bankAccountNumber.replaceAll(' ', ''),
            holderName
        })
        .then((response: Response) => {
            if(response.code === 200) {
                setIsSubmitVisible(false);
                toast.success('Dane konta bankowego zostały zaktualizowane.');
            }
        })
        .catch(() => {
            toast.error('Coś poszło, nie tak');
        })
        .then(() => setIsLoading(false));
    }

    const isFormCorrect = () => {        
        setBankAccountNumberError(bankAccountNumberRules(bankAccountNumber.replaceAll(' ', '')));
        setHolderNameError(bankAccountHolderNameRules(holderName));

        if(!bankAccountNumber || !holderName || bankAccountNumberError || holderNameError) {
            return false;
        }
        
        return true;
    }

    useEffect(() => {
        if(bankAccountNumberError) setBankAccountNumberError(bankAccountNumberRules(bankAccountNumber.replaceAll(' ', '')));
    }, [bankAccountNumber]);

    useEffect(() => {
        if(holderNameError) setHolderNameError(bankAccountHolderNameRules(holderName));
    }, [holderName]);

    return (
        <section className="w-100 primary-box mt-3">
            <h5>Profil płatności</h5>
            <div>Uzupełnij dane, aby móc wypłacać zarobione pieniądze.</div>
            <div>
                <PrimaryInput
                    label="Numer konta bankowego"
                    placeholder="np. XX XXXX XXXX XXXX XXXX XXXX XXXX"
                    value={bankAccountNumber}
                    onChange={val => setNumber(val)}
                    maxLength={32}
                    inputMode="numeric"
                    onBlur={() => setBankAccountNumberError(bankAccountNumberRules(bankAccountNumber.replaceAll(' ', '')))}
                    errorMessage={bankAccountNumberError}
                />
                <PrimaryInput
                    label="Nazwa posiadacza rachunku"
                    value={holderName}
                    onChange={val => {
                        setIsSubmitVisible(true);
                        setHolderName(val);
                    }}
                    maxLength={70}
                    onBlur={() => setHolderNameError(bankAccountHolderNameRules(holderName))}
                    errorMessage={holderNameError}
                />
            </div>
            {isSubmitVisible && <div className="d-flex justify-content-center justify-content-md-end mt-3">
                <PrimaryButton
                    title="Zapisz"
                    onClick={updateBankAccountDetails}
                    isLoading={isLoading}
                />
            </div>}
        </section>
    );
}
export default PaymentProfile;