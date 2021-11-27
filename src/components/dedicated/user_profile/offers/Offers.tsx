import React, { useState } from 'react';
import styles from './Offers.module.css';
import { useRouter } from 'next/router';
import { Offer } from '../../../../redux/actions/user/Offers';
import EditButton from '../../../buttons/edit/EditButton';
import PrimaryButton from '../../../buttons/primary/PrimaryButton';
import Card from './card/Card';

interface Props {
    isDashboard: boolean;
    nick: string;
    data: Offer[];
    isActive: boolean;
}

const Offers: React.FC<Props> = ({ isDashboard, nick, data, isActive }) => {
    const [selectedOfferId, setSelectedOfferId] = useState<number>();

    const router = useRouter();

    if(!isDashboard && data !== undefined && data.length === 0) return null;
    
    return (
        <div className={styles.container}>
            <div className="d-flex align-items-center">
                <h4 className={styles.title}>{isDashboard ? 'Moja oferta' : 'Oferta'}</h4>
                {isDashboard &&
                <div className="ml-3">
                    <EditButton title="Edytuj oferte" attributes={{ 'data-toggle': 'modal', 'data-target': '#editOffersModal' }} />
                </div>}
            </div>
            <div className="my-2" style={{ color: '#ccc' }}>
                {isDashboard ? 'Poinformuj swoich fanów jaki rodzaj video oferujesz. Dodaj ofertę i poczekaj na zamówienia.'
                : 'Kupując u tego użytkownika dostajesz gwarancję zwrotu pieniędzy w przypadku nie dostarczenia video.' }
            </div>
            {isActive ? <div className="d-flex flex-column">
                {data !== undefined && data.map(({ id, title, description, price }) => (
                    <Card
                        key={id}
                        title={title}
                        price={price}
                        description={description}
                        isSelected={id === selectedOfferId}
                        onClick={() => setSelectedOfferId(id)}
                    />
                ))}
                {data.find(offer => offer.id === selectedOfferId) !== undefined && <PrimaryButton
                    title={`Zamów [${data.find(offer => offer.id === selectedOfferId)?.price} PLN]`}
                    style={{ maxWidth: 'unset', marginTop: '10px' }}
                    onClick={() => {
                        router.push({
                            pathname: `${nick}/booking`,
                            query: { id: selectedOfferId }
                        });
                    }}
                />}
            </div>
            : <div className="primary-box">
                {isDashboard
                ? <h6 className={styles.disactivated}>Wyłączyłeś swoją aktywność. Twoi fani nie mogą składać Ci teraz zamówień.</h6>
                : <h6 className={styles.disactivated}>{nick} nie przyjmuje aktualnie żadnych zamówień.</h6>}
            </div>}
        </div>
    );
}
export default Offers;