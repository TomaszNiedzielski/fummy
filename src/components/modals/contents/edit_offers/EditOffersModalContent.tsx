import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { offerDescriptionRules, offerPriceRules, offerTitleRules } from '../../../../helpers/ValidationRules';
import { Offer, saveOffer } from '../../../../redux/actions/user/Offers';
import { RootState } from '../../../../redux/store';
import PrimaryButton from '../../../buttons/primary/PrimaryButton';
import { hideModal } from '../../PrimaryModal';
import OfferItem from './offer_item/OfferItem';

const CURRENCY = 'PLN';

interface OfferItemInterface extends Offer {
    isValid: boolean
}

const DEFAULT_OFFER: OfferItemInterface = {
    id: null,
    title: '',
    description: '',
    price: null,
    currency: CURRENCY,
    isValid: true
}

const CreateOfferModalContent: React.FC = () => {
    const dispatch = useDispatch();

    const [offers, setOffers] = useState<OfferItemInterface[]>([]);

    const offersFromRedux = useSelector((state: RootState) => state.offers);

    useEffect(() => {
        const updatedOffers = [...offersFromRedux.data];

        if (updatedOffers.length === 0) {
            updatedOffers.push({...DEFAULT_OFFER});
        }

        setOffers(updatedOffers);
    }, [offersFromRedux]);

    const save = () => {
        let isFormValid = true;
        offers.map(({ title, price, description }, i) => {
            const titleError = offerTitleRules(title);
            const priceError = offerPriceRules(!price ? '' : price.toString());
            const descriptionError = offerDescriptionRules(description);

            if (titleError || priceError || descriptionError) {
                offers[i].isValid = false;
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            setOffers([...offers]);

            return;
        }

        dispatch(saveOffer(offers));

        hideModal();
    }

    const update = (i: number, prop: string, val: string) => {
        let updatedOffer = [...offers];
        updatedOffer[i][prop] = val;

        setOffers(updatedOffer);
    }

    const onRemoveOffer = (i: number) => {
        let updatedOffers = [...offers];
        updatedOffers = updatedOffers.filter((item, index) => i !== index);

        setOffers(updatedOffers);
    }

    const onAddNewOffer = () => {
        const updatedOffers = [...offers];
        updatedOffers.push({...DEFAULT_OFFER});

        setOffers(updatedOffers);
    }

    return (
        <div className="d-flex flex-column mb-5">
            {offers.map(({ title, price, description, isValid }, i) => (
                <OfferItem
                    key={i}
                    title={title}
                    price={!price ? '' : price.toString()}
                    description={description}
                    onRemoveOffer={() => onRemoveOffer(i)}
                    update={(property, value) => update(i, property, value)}
                    isFormValid={isValid}
                />
            ))}
            {offers.length < 3 && <div
                style={{ backgroundColor: 'rgba(var(--global-primary-color-rgb), .1)', borderRadius: '10px' }}
                className="d-flex justify-content-center py-2 mb-3 cursor-pointer"
                onClick={() => onAddNewOffer()}
            >
                <div>+ Dodaj kolejną oferte</div>
            </div>}
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