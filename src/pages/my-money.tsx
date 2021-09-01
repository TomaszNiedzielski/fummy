import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PrimaryButton from '../components/buttons/primary/PrimaryButton';
import { post, Response } from '../helpers/ApiRequest';
import { RootState } from '../redux/store';

const MoneyBoxPage: React.FC = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [money, setMoney] = useState();

    // useEffect(() => {
    //     if(!token) return;

    //     post('donates/count-money?token='+token)
    //     .then((response: Response) => {
    //         if(response.code === 200) {
    //             setMoney(response.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
    //         }
    //     });
    // }, [token]);

    return (
        <div className="container text-center pt-3">
            <div className="money-box__title">Stan portfela</div>
            <div className="money-box__amount">0 PLN</div>
            <small className="d-block mt-3">Wyświetlana kwota jest kwotą netto pomniejszoną o koszty</small>
            <small>obsługi transakcji płatniczych 3% i naliczaną prowizję 6%.</small>
            <div className="mt-3">
                <PrimaryButton title="Wypłać pieniądze" />
            </div>
        </div>
    )
}
export default MoneyBoxPage;