import React from 'react';
import PrimaryButton from '../components/buttons/primary/PrimaryButton';
import { get } from '../helpers/ApiRequest';
import Cookies from 'universal-cookie';
import PayoutsHistoryList from '../components/dedicated/finances/payouts/List';
import TopbarNavigator from '../components/dedicated/topbar_navigator/TopbarNavigator';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PrimaryModal from '../components/modals/PrimaryModal';
import PayoutRequestModalContent from '../components/modals/contents/PayoutRequestModalContent';
import IncomesHistoryList from '../components/dedicated/finances/incomes/List';
import { Item as PayoutHistoryItem } from '../components/dedicated/finances/payouts/List';
import { Item as IncomeHistoryItem } from '../components/dedicated/finances/incomes/List';

interface Props {
    incomesList: IncomeHistoryItem[];
    payoutsList: PayoutHistoryItem[];
    accountBalance: number;
    income: number;
}

const MoneyBoxPage: React.FC<Props> = ({ incomesList, payoutsList, accountBalance, income }) => {
    return (
        <div className="container pt-3">
            <h5 className="p-2 rounded text-center" style={{ backgroundColor: 'rgba(var(--global-primary-color-rgb), .1)' }}>Stan konta, wypłacanie, dochody</h5>
            <div className="d-flex flex-column flex-sm-row justify-content-center mb-5">
                <section className="primary-box primary-color px-4 px-sm-5 text-center d-flex flex-column justify-content-center mr-sm-5 my-2">
                    <h5>Stan mojego konta</h5>
                    <h3 className="mt-2">{accountBalance} PLN</h3>
                    {accountBalance > 0 ? <div className="mt-3 w-100 text-center">
                        <PrimaryButton
                            title="Wypłać pieniądze"
                            attributes={{ 'data-toggle': 'modal', 'data-target': '#payoutRequestModal' }}
                            style={{ width: '200px' }}
                        />
                    </div> : null}
                </section>
                <section className="primary-box primary-color px-4 px-sm-5 text-center d-flex flex-column justify-content-center mr-sm-5 my-2">
                    <h5>Dochód od początku</h5>
                    <h3 className="mt-2">{income} PLN</h3>
                </section>
            </div>

            <PrimaryModal
                id="payoutRequestModal"
                title="Wypłata na konto"
                Content={PayoutRequestModalContent}
                contentProps={{
                    moneyAmount: accountBalance
                }}
            />

            <h5 className="mb-3 p-2 rounded text-center" style={{ backgroundColor: 'rgba(var(--global-primary-color-rgb), .1)' }}>Historia operacji finansowych</h5>
            <Router>
                <TopbarNavigator
                    links={[{
                        title: 'Przychody',
                        href: ''
                    }, {
                        title: 'Wypłaty',
                        href: 'payouts'
                    }]}
                />
                <Switch>
                    <Route exact path="/">
                        <IncomesHistoryList list={incomesList} />
                    </Route>
                    <Route path="/payouts">
                        <PayoutsHistoryList list={payoutsList} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export const getServerSideProps = async ({ req }) => {
    const token = new Cookies(req.headers.cookie).get('token');

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const incomesListResponse: any = await get('incomes/history?token='+token);
    const payoutsListResponse: any = await get('payouts/history?token='+token);
    const accountBalanceResponse: any = await get('account-balance?token='+token);
    const incomeResponse: any = await get('incomes?token='+token);

    return {
        props: {
            incomesList: incomesListResponse.data,
            accountBalance: accountBalanceResponse.data,
            payoutsList: payoutsListResponse.data,
            income: incomeResponse.data
        }
    }
}

export default MoneyBoxPage;