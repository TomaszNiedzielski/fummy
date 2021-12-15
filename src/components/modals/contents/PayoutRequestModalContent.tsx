import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { get, post, Response } from '../../../helpers/ApiRequest';
import { RootState } from '../../../redux/store';
import CancelButton from '../../buttons/cancel/CancelButton';
import ConfirmButton from '../../buttons/confirm/ConfirmButton';
import { hideModal } from '../PrimaryModal';

const PayoutRequestModalContent: React.FC<any> = ({ moneyAmount }) => {
    const { token } = useSelector((state: RootState) => state.auth);

    const [isPaymentProfileComplete, setIsPaymentProfileComplete] = useState<boolean>();
    const [isPayoutRequestSent, setIsPayoutRequestSent] = useState<boolean>();

    const router = useRouter();

    useEffect(() => {
        if(!token) return;

        get('bank-account')
        .then((response: Response) => {
            if(response.code === 200 && response.data) {
                const { number, holderName } = response.data;

                if(number && holderName) {
                    setIsPaymentProfileComplete(true);
                } else {
                    setIsPaymentProfileComplete(false);
                }
            }
        });

        get('payouts/request/status')
        .then((response: Response) => {
            const { code, data } = response;
            
            if(code === 200) {
                setIsPayoutRequestSent(data.isRequestSent)
            }
        })
    }, [token, router.pathname]);

    const createPayoutRequest = () => {
        post('payouts/request')
        .then((response: Response) => {
            if(response.code === 200) {
                hideModal();
                setIsPayoutRequestSent(true);
                toast.success(response.message);
            }
        })
        .catch(({ response }) => {
            toast.error(response.data.message);
        })
    }

    return (
        <div className="pb-2">
            {isPaymentProfileComplete
            ? <>
            <div className="mb-4">
                <div>Ogromnie cieszymy się, że możesz zarabiać, dzięki Fummy!</div>
                <div className="mt-3">Cały stan Twojego konta zostanie wypłacony najszybciej jak to będzie możliwe.</div>
            </div>
            <div className="d-flex justify-content-end align-items-center">
                {!isPayoutRequestSent && <div className="mr-2">
                    <CancelButton
                        title="Anuluj"
                        attributes={{ 'data-dismiss': 'modal', 'aria-label': 'Close' }}
                    />
                </div>}
                <div>
                    <ConfirmButton
                        title={"Potwierdź wypłatę ["+moneyAmount+" PLN]"}
                        onClick={createPayoutRequest}
                        disabled={isPayoutRequestSent}
                    />
                </div>
            </div>
            </>
            : <div>
                <h6 className="text-danger">
                    Nie znamy Twojego numeru konta. Przejdź do ustawień
                    i uzupełnij potrzebne informacje w sekcji <span className="font-italic">Profil płatności</span>.
                </h6>
                <div className="d-flex justify-content-end mt-4">
                    <div className="mr-2">
                        <CancelButton
                            title="Anuluj"
                            attributes={{ 'data-dismiss': 'modal', 'aria-label': 'Close' }}
                        />
                    </div>
                    <div>
                        <ConfirmButton
                            title="Przejdź do ustawień"
                            onClick={() => router.push('settings')}
                        />
                    </div>
                </div>
            </div>}
        </div>
    );
}
export default PayoutRequestModalContent;