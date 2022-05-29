import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import EditButton from '../../../components/buttons/edit/EditButton';
import PrimaryButton from '../../../components/buttons/primary/PrimaryButton';
import StarRating from '../../../components/dedicated/star_rating/StarRating';
import PrimaryInput from '../../../components/inputs/primary/PrimaryInput';
import PrimaryTextArea from '../../../components/inputs/primary/PrimaryTextArea';
import { post, Response } from '../../../helpers/ApiRequest';
import { purchaserNameRules } from '../../../helpers/ValidationRules';

interface Props {
    isReviewedProp: boolean;
}

const ReviewPage: NextPage<Props> = ({ isReviewedProp }) => {
    const [rate, setRate] = useState(0);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [isReviewed, setIsReviewed] = useState(isReviewedProp);
    const [nameError, setNameError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const sendReviewRequest = () => {
        if(!isFormCorrect()) return;

        setIsLoading(true);

        post('reviews', { key: router.query.key, rate, name, text })
        .then((response: Response) => {
            if(response.code === 200) {
                setIsReviewed(true);
            }
        })
        .catch(({ response }) => {
            const { status, data } = response;

            if(status === 422) {
                setNameError(data.errors.name[0]);
            }
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        if(nameError) setNameError(purchaserNameRules(name));
    }, [name]);

    const isFormCorrect = () => {        
        setNameError(purchaserNameRules(name));

        if(!name || nameError) {
            return false;
        }
        
        return true;
    }
    
    return (
        <div className="container">
            {!isReviewed ? <section className="d-flex flex-column align-items-center mx-auto mt-4" style={{ maxWidth: '600px' }}>
                <h4 className="px-2 mb-3 text-center">Podziel się swoją opinią na temat zrealizowanego zamówienia.</h4>
                <div className="w-100 text-left mt-2">
                    <small>Ocena *</small>
                    <StarRating
                        rate={rate}
                        onChange={setRate}
                        size={30}
                    />
                </div>
                <PrimaryInput
                    placeholder="Twoje imię *"
                    value={name}
                    onChange={setName}
                    onBlur={() => setNameError(purchaserNameRules(name))}
                    errorMessage={nameError}
                />
                <PrimaryTextArea
                    placeholder="Twoja opinia..."
                    value={text}
                    onChange={setText}
                />
                <PrimaryButton
                    title="Wyślij"
                    style={{ marginTop: '20px' }}
                    onClick={sendReviewRequest}
                    disabled={!rate}
                    isLoading={isLoading}
                />
            </section> :
            <div className="d-flex flex-column align-items-center">
                <h6 className="mt-5 text-center mb-3">Dziękujemy za przesłanie opinii!</h6>
                <EditButton title="Edytuj opinię" onClick={() => setIsReviewed(false)} />
            </div> 
            }
        </div>
    );
}

export const getServerSideProps = async ({ req }) => {
    const key = req.__NEXT_INIT_QUERY.key;

    try {
        const reviewKeyRequest: any = await post('reviews/check-key', { key });

        return {
            props: {
                isReviewedProp: reviewKeyRequest.data.isUsed
            }
        }
    } catch (e) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    
}

export default ReviewPage;