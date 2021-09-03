import React from 'react';
import OrderCard from '../components/dedicated/order_card/OrderCard';
import { post, Response } from '../helpers/ApiRequest';
import Cookies from 'universal-cookie';

const OrdersPage = ({ orders }) => {
    return (
        <div className="container">
            {orders !== undefined && orders.length > 0 ? <>
                <h2 className="my-3 primary-color ml-2" style={{ fontFamily: 'futura-extra-bold-oblique' }}>Zamówienia</h2>
                <div className="d-flex flex-wrap">
                    {orders.map(({ id, title, instructions, deadline, purchaser, price, currency }) => (
                        <OrderCard
                            key={id}
                            id={id}
                            title={title}
                            instructions={instructions}
                            deadline={deadline}
                            purchaser={purchaser}
                            price={price}
                            currency={currency}
                        />
                    ))}
                </div>
            </> : <h6 className="text-center mt-3 primary-color">Brak zamówień</h6>}
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