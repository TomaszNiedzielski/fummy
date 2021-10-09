import React from 'react';
import OrderCard from '../components/dedicated/orders/card/Card';
import { post, Response } from '../helpers/ApiRequest';
import Cookies from 'universal-cookie';
import Navigator from '../components/dedicated/orders/navigator/Navigator';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const CurrentOrders = ({ orders }) => {
    if(orders.length > 0) {
        return (
            orders.map(({ id, title, description, instructions, deadline, purchaser, price, currency, processingComplete }) => (
                <OrderCard
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    instructions={instructions}
                    deadline={deadline}
                    purchaser={purchaser}
                    price={price}
                    currency={currency}
                    processingComplete={processingComplete}
                />
            ))
        );
    }
    
    return <h6 className="w-100 text-center mt-3">Brak aktualnych zamówień</h6>
}

const CompletedOrders = ({ orders }) => {
    if(orders.length > 0) {
        return (
            orders.map(({ id, title, description, instructions, deadline, purchaser, price, currency, videoName, thumbnail, processingComplete, videoCreatedAt }) => (
                <OrderCard
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    instructions={instructions}
                    deadline={deadline}
                    purchaser={purchaser}
                    price={price}
                    currency={currency}
                    thumbnail={thumbnail}
                    videoName={videoName}
                    processingComplete={processingComplete}
                    videoCreatedAt={videoCreatedAt}
                />
            ))
        );
    }

    return <h6 className="w-100 text-center mt-3">Brak zrealizowanych zamówień</h6>
}

const UnrealizedOrders = ({ orders }) => {
    if(orders.length > 0) {
        return (
            orders.map(({ id, title, description, instructions, deadline, purchaser, price, currency }) => (
                <OrderCard
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    instructions={instructions}
                    deadline={deadline}
                    purchaser={purchaser}
                    price={price}
                    currency={currency}
                    unrealized={true}
                />
            ))
        );
    }

    return <h6 className="w-100 text-center mt-3">Brak niezrealizowanych zamówień</h6>
}

export type OrdersView = 'current' | 'completed' | 'uncompleted';

const OrdersPage = ({ orders }) => {
    return (
        <div className="container mt-5 mt-md-0 mx-0 px-0 d-flex flex-column flex-md-row mw-100">
            <Router>
                <Navigator />
                <div className="w-100 d-flex flex-wrap">
                    <Switch>
                        <Route exact path="/">
                            <CurrentOrders orders={orders.current} />
                        </Route>
                        <Route path="/completed">
                            <CompletedOrders orders={orders.completed} />
                        </Route>
                        <Route path="/uncompleted">
                            <UnrealizedOrders orders={orders.unrealized} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
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

    let orders: unknown;
    await post('orders/load?token='+token)
    .then((response: Response) => {
        if(response.code === 200) {
            orders = response.data;
        }
    });

    if(orders) {
        return {
            props: { orders }
        }
    }
}
export default OrdersPage;