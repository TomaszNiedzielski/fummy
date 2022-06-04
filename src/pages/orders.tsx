import React, { useEffect, useState } from 'react';
import OrderCard from '../components/dedicated/orders/card/Card';
import { get, post, Response } from '../helpers/ApiRequest';
import Cookies from 'universal-cookie';
import Navigator from '../components/dedicated/orders/navigator/Navigator';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Props as Order } from '../components/dedicated/orders/card/Card';

const CurrentOrders = ({ orders }) => {
    if(orders.length > 0) {
        return (
            orders.map((order: Order) => (
                <OrderCard
                    key={order.id}
                    {...order}
                />
            ))
        );
    }
    
    return <h6 className="w-100 text-center mt-3">Brak aktualnych zamówień</h6>
}

const CompletedOrders = ({ orders }) => {
    if(orders.length > 0) {
        return (
            orders.map((order: Order) => (
                <OrderCard
                    key={order.id}
                    {...order}
                />
            ))
        );
    }

    return <h6 className="w-100 text-center mt-3">Brak zrealizowanych zamówień</h6>
}

const UnrealizedOrders = ({ orders }) => {
    if(orders.length > 0) {
        return (
            orders.map((order: Order) => (
                <OrderCard
                    key={order.id}
                    {...order}
                    unrealized={true}
                />
            ))
        );
    }

    return <h6 className="w-100 text-center mt-3">Brak niezrealizowanych zamówień</h6>
}

export type OrdersView = 'current' | 'completed' | 'uncompleted';

const OrdersPage = ({ ordersProps }) => {
    const [orders, setOrders] = useState(ordersProps);
    const { token } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        const interval = setInterval(() => {
            get('orders?token='+token)
            .then((response: Response) => {
                if(response.code === 200) {
                    setOrders(response.data);
                }
            });

            post('notifications/mark-as-read?token='+token);
        }, 10000);
        
        return () => clearInterval(interval);
    }, [token]);


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
    await get('orders?token='+token)
    .then((response: Response) => {
        if(response.code === 200) {
            orders = response.data;
        }
    });

    await post('notifications/mark-as-read?token='+token);

    if(orders) {
        return {
            props: { ordersProps: orders }
        }
    }
}
export default OrdersPage;