import React from 'react';
import PrimaryButton from '../components/buttons/primary/PrimaryButton';
import PaymentHistoryItem from '../components/dedicated/payments/PaymentHistoryItem';
import { post } from '../helpers/ApiRequest';
import Cookies from 'universal-cookie';

const MoneyBoxPage: React.FC<{ incomesList: any, income: number }> = ({ incomesList, income }) => {
    return (
        <div className="container pt-3">
            <div className="d-flex flex-column align-items-center">
                <h5>Stan mojego konta</h5>
                <h3 className="mt-2">{income} PLN</h3>
                <div className="mt-3 w-100 text-center">
                    <PrimaryButton title="Wypłać pieniądze" />
                </div>
            </div>

            {incomesList.length > 0 && <h4 className="mt-5">Historia przychodów</h4>}
            {incomesList.map(({ createdAt, netAmount, grossAmount, purchaserName}, i: number) => (
                <PaymentHistoryItem
                    key={i}
                    createdAt={createdAt}
                    netAmount={netAmount}
                    grossAmount={grossAmount}
                    purchaserName={purchaserName}
                />
            ))}
        </div>
    )
}

export const getServerSideProps = async ({ req }) => {
    const token = new Cookies(req.headers.cookie).get('token');

    if(!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const incomesListResponse: any = await post('incomes/get-history?token='+token);
    const incomeResponse: any = await post('income/get?token='+token);

    return {
        props: {
            incomesList: incomesListResponse.data,
            income: incomeResponse.data
        }
    }
}

export default MoneyBoxPage;