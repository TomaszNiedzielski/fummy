import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveOffer } from '../../../redux/actions/user/Offer';
import { RootState } from '../../../redux/store';
import PrimaryButton from '../../buttons/primary/PrimaryButton';
import PrimaryInput from '../../inputs/primary/PrimaryInput';
import { hideModal } from '../PrimaryModal';

const CURRENCY = 'PLN';

const DEFAULT_OFFER = {
    id: null,
    title: '',
    price: '',
    currency: CURRENCY,
    isRemoved: false
}

const CreateOfferModalContent: React.FC = () => {
    const dispatch = useDispatch();

    const [offer, setOffer] = useState([{...DEFAULT_OFFER}, {...DEFAULT_OFFER}, {...DEFAULT_OFFER}]);

    const offerFromRedux = useSelector((state: RootState) => state.offer);

    useEffect(() => {
        console.log('redux state po rzekomym wyzerowaniu: ', offerFromRedux);

        // if(offerFromRedux.data !== undefined && offerFromRedux.data.length > 0) {
            const updatedOffer = [...offerFromRedux.data];
            while(updatedOffer.length < 3) {
                updatedOffer.push({...DEFAULT_OFFER});
            }

            setOffer(updatedOffer);
        // }
    }, [offerFromRedux]);

    const save = () => {
        // let filteredOffer = offer.filter(item => item.title !== '' && item.price !== '');

        console.log('before ', offer);

        let filteredOffer = offer.filter(item => {
            if(!item.id && (!item.title || !item.price)) {
                return false;
            }

            return true;
        });

        console.log('filter ', filteredOffer);

        filteredOffer = filteredOffer.map(item => {
            if((item.title === '' || item.price === '') && item.id) {
                item.isRemoved = true;
            } else {
                item.isRemoved = false;
            }

            return item;
        });

        console.log('after ', filteredOffer);

        dispatch(saveOffer(filteredOffer));

        hideModal();
    }

    const update = (i: number, prop: string, val: string) => {
        let updatedOffer = [...offer];
        updatedOffer[i][prop] = val;

        setOffer(updatedOffer);
    }

    return (
        <div className="d-flex flex-column mb-5">
            {offer.map((item, i) => (
                <div className="d-flex" key={i}>
                    <PrimaryInput
                        label={i === 0 && "Co zrobisz?"}
                        placeholder="np. Pozdrowienia"
                        value={item.title}
                        onChange={val => update(i, 'title', val)}
                    />
                    <div className="ml-2">
                        <PrimaryInput
                            label={i === 0 && "Cena [PLN]"}
                            placeholder="np. 200"
                            type="number"
                            value={item.price}
                            onChange={val => update(i, 'price', val)}
                        />
                    </div>
                </div>
            ))}
            <div className="w-100 text-center mt-3">
                <PrimaryButton
                    title="Zapisz"
                    onClick={save}
                />
            </div>
        </div>
    );
}
export default CreateOfferModalContent;