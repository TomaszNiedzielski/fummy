import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import PrimaryButton from '../../../components/buttons/primary/PrimaryButton';
import PrimaryInput from '../../../components/inputs/primary/PrimaryInput';
import PrimaryTextArea from '../../../components/inputs/primary/PrimaryTextArea';
import { API_STORAGE } from '../../../constants';
import { get, post, Response } from '../../../helpers/ApiRequest';
import { useRouter } from 'next/router';
import Checkbox from '../../../components/inputs/checkbox/Checkbox';
import { emailRules, orderInstructionsRules, purchaserNameRules, validateNumericString } from '../../../helpers/ValidationRules';
import Card from '../../../components/dedicated/user_profile/offers/card/Card';
import Info from '../../../components/dedicated/booking/Info';

const BookingPage: React.FC<any> = ({ profileDetails, offers }) => {
    const { avatar, nick } = profileDetails;

    const [selectedOfferId, setSelectedOfferId] = useState<number>();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [instructions, setInstructions] = useState<string>();
    const [isPrivate, setIsPrivate] = useState(false);
    const [price, setPrice] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    const [nameError, setNameError] = useState<string>();
    const [emailError, setEmailError] = useState<string>();
    const [instructionsError, setInstructionsError] = useState<string>();

    const router = useRouter();

    useEffect(() => {
        const id = window.location.href.split('=').pop();

        if(validateNumericString(id)) {
            setSelectedOfferId(Number(id) ? Number(id) : 0);
        } else {
            setSelectedOfferId(offers[0].id);
        }
    }, [offers]);

    useEffect(() => {
        if(selectedOfferId !== undefined) {
            setPrice(offers.find(({ id }) => id === selectedOfferId).price);
        }
    }, [selectedOfferId]);

    const orderVideo = () => {
        if(!isFormCorrect()) return;

        setIsLoading(true);

        post(`order/create`, { name, email, instructions, offerId: selectedOfferId, isPrivate })
        .then((response: Response) => {
            setIsLoading(false);

            if(response.code === 200) {
                router.push(`/u/${nick}/booked`);
            }
        });
    }

    useEffect(() => {
        if(nameError) setNameError(purchaserNameRules(name));
    }, [name]);

    useEffect(() => {
        if(emailError) setEmailError(emailRules(email));
    }, [email]);

    useEffect(() => {
        if(instructionsError) setInstructionsError(orderInstructionsRules(instructions));
    }, [instructions]);

    const isFormCorrect = () => {        
        setNameError(purchaserNameRules(name));
        setEmailError(emailRules(email));
        setInstructionsError(orderInstructionsRules(instructions));

        if(!name || !email || !instructions || nameError || emailError || instructionsError) {
            return false;
        }
        
        return true;
    }

    return (
        <div className="container d-flex justify-content-around flex-wrap flex-column flex-lg-row align-items-center">
            <div className="d-flex flex-column align-items-center mb-5">
                <div className="booking__avatar">
                    <img src={avatar ? (avatar.slice(0, 8) === 'https://' ? avatar : API_STORAGE + "avatars/" + avatar) : "/icons/user.png"} alt="avatar" />
                </div>
                <h4 className="mt-2 text-center primary-color">
                    <span>Zamów video od </span>
                    <span>
                        <Link href={'/u/'+nick}>
                            <a className="primary-color">{nick}</a>
                        </Link>
                    </span>
                </h4>
                <div className="booking__form">
                    <div className="d-flex flex-column">
                        {offers.map(({ id, title, price, description }) => (
                            <Card
                                key={id}
                                title={title}
                                price={price}
                                description={description}
                                onClick={() => setSelectedOfferId(id)}
                                isSelected={selectedOfferId === id}
                            />
                        ))}
                    </div>
                    <div className="my-3 d-flex flex-column align-items-center">
                        <PrimaryInput
                            label="Imię"
                            placeholder="Jak masz na imię?"
                            value={name}
                            onChange={val => setName(val)}
                            style={styles.input}
                            errorMessage={nameError}
                            onBlur={() => setNameError(purchaserNameRules(name))}
                        />
                        <PrimaryInput
                            type="email"
                            label="Twój e-mail."
                            placeholder="Adres e-mail, na który dostaniesz link do filmu."
                            value={email}
                            onChange={val => setEmail(val)}
                            style={styles.input}
                            errorMessage={emailError}
                            onBlur={() => setEmailError(emailRules(email))}
                        />
                        <PrimaryTextArea
                            label="Instrukcje do filmu."
                            placeholder="Opisz co konkretnie chciał(a)byś zobaczyć na filmie. Pamiętaj, że im więcej podasz szczegółów, tym lepszy film otrzymasz."
                            value={instructions}
                            onChange={val => setInstructions(val)}
                            rows={5}
                            style={styles.input}
                            errorMessage={instructionsError}
                            onBlur={() => setInstructionsError(orderInstructionsRules(instructions))}
                        />
                        <div className="w-100 d-flex align-items-start my-2">
                            <Checkbox label="Nie pokazuj tego video w serwisie." value={isPrivate} onChange={(val) => setIsPrivate(val)} />
                        </div>
                        <div className="w-100 mt-3">
                            <PrimaryButton
                                title={`Zamów i zapłać [${price} PLN]`}
                                style={{ maxWidth: 'unset' }}
                                onClick={orderVideo}
                                isLoading={isLoading}
                            />
                        </div>
                        <div className="w-100 mt-3" style={{ fontSize: '14px' }}>
                            <span>Zamawiając video, akceptujesz </span>
                            <Link href="/terms-of-use"><a className="text-muted">Regulamin</a></Link> 
                            <span> oraz </span>
                            <Link href="/privacy-policy"><a className="text-muted">Politykę prywatności.</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Info />
        </div>
    );
}

export const getServerSideProps = async ({ params }) => {
    const { nick } = params;

    const profileDetails: any = await post('profile/load-details', { nick });
    const offers: any = await get('offers/load/'+nick);

    if(profileDetails.code === 200 && offers.code === 200) {
        return {
            props: {
                profileDetails: profileDetails.data,
                offers: offers.data
            }
        }
    }
}

const styles = {
    input: {
        background: 'whitesmoke',
    }
}

export default BookingPage;