import React, { useState, useEffect } from 'react';
import styles from './OfferItem.module.css';
import { offerDescriptionRules, offerPriceRules, offerTitleRules } from '../../../../../helpers/ValidationRules';
import PrimaryInput from '../../../../inputs/primary/PrimaryInput';
import PrimaryTextArea from '../../../../inputs/primary/PrimaryTextArea';

interface Props {
    title: string;
    price: string;
    description: string;
    onRemoveOffer: () => void;
    update: (property: string, value: string) => void;
    isFormValid: boolean;
}

const OfferItem: React.FC<Props> = ({ title, price, description, onRemoveOffer, update, isFormValid }) => {
    const [titleError, setTitleError] = useState<string>();
    const [priceError, setPriceError] = useState<string>();
    const [descriptionError, setDescriptionError] = useState<string>();

    useEffect(() => {
        if (titleError) setTitleError(offerTitleRules(title));
    }, [title]);

    useEffect(() => {
        if (priceError) setPriceError(offerPriceRules(price));
    }, [price]);

    useEffect(() => {
        if (descriptionError) setDescriptionError(offerDescriptionRules(description));
    }, [description]);

    useEffect(() => {
        if (!isFormValid) {
            setTitleError(offerTitleRules(title));
            setPriceError(offerPriceRules(price));
            setDescriptionError(offerDescriptionRules(description));
        }
    }, [isFormValid]);

    return (
        <div className={styles.container}>
            <div>
                <button className={styles.remove} onClick={onRemoveOffer}>
                    <img src="/icons/trash.svg" alt="delete" />
                    <span className="ml-1 text-white">usuń</span>
                </button>
            </div>
            <div className="d-flex">
                <PrimaryInput
                    label="Co zrobisz?"
                    placeholder="np. Pozdrowienia"
                    value={title}
                    onChange={val => update('title', val)}
                    maxLength={30}
                    errorMessage={titleError}
                    onBlur={() => setTitleError(offerTitleRules(title))}
                />
                <div className="ml-2">
                    <PrimaryInput
                        label="Cena [PLN]"
                        placeholder="np. 200"
                        type="number"
                        min={2}
                        value={price}
                        onChange={val => update('price', val)}
                        errorMessage={priceError}
                        onBlur={() => setPriceError(offerPriceRules(price))}
                    />
                </div>
            </div>
            <PrimaryTextArea
                label="Opis"
                value={description}
                onChange={val => update('description', val)}
                maxLength={255}
                errorMessage={descriptionError}
                onBlur={() => setDescriptionError(offerDescriptionRules(description))}
            />
        </div>
    );
}
export default OfferItem;