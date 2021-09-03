import React from 'react';
import EditButton from '../../../buttons/edit/EditButton';
import OfferButton from '../../../buttons/offer/OfferButton';
import styles from './Offer.module.css';

export interface OfferItem {
    id: number | string;
    title: string;
    price: number | string;
    currency: string;
}

interface Props {
    isDashboard: boolean;
    nick: string;
    data: OfferItem[];
}

const Offer: React.FC<Props> = ({ isDashboard, nick, data }) => {
    if(!isDashboard && data !== undefined && data.length === 0) return null;

    return (
        <div className={styles.container}>
            <div className="d-flex align-items-center">
                <h4 className={styles.title}>{isDashboard ? 'Moja oferta' : 'Oferta'}</h4>
                {isDashboard &&
                <div className="ml-3">
                    <EditButton title="Edytuj oferte" attributes={{ 'data-toggle': 'modal', 'data-target': '#createOfferModal' }} />
                </div>}
            </div>
            <div className="my-2" style={{ color: '#ccc' }}>
                {isDashboard ? 'Poinformuj swoich fanów jaki rodzaj video oferujesz. Dodaj ofertę i poczekaj na zamówienia.'
                : 'Kupując u tego użytkownika dostajesz gwarancję zwrotu pieniędzy w przypadku nie dostarczenia video.' }
            </div>
            <div className="d-flex flex-wrap flex-lg-row">
                {data !== undefined && data.map(({ id, title, price, currency }) => (
                    <OfferButton key={id} title={title} price={price} currency={currency} link={nick+'/booking?id='+id} />
                ))}
            </div>
        </div>
    );
}
export default Offer;