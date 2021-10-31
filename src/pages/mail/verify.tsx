import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { post, Response } from '../../helpers/ApiRequest';
import { RootState } from '../../redux/store';
import Cookies from 'universal-cookie';

const VerifyPage = () => {
    const [processState, setProcessState] = useState('Weryfikuje...');
    const { isMailVerified, nick } = useSelector((state: RootState) => state.profile);

    useEffect(() => {
        if(isMailVerified) {
            window.location.href = '/u/'+nick;
        }
    }, [isMailVerified]);

    useEffect(() => {
        const { searchParams } = new URL(window.location.href);
        const userId = searchParams.get('id');
        const key = searchParams.get('key');

        post('mail/confirm', { userId, key })
        .then((response: Response) => {
            if(response.code === 200) {
                setProcessState('Adres e-mail został zweryfikowany.');
            }
        })
        .catch(() => {
            setProcessState('Coś poszło nie tak, link wygasł lub jest uszkodzony.');
        })
    }, []);

    return (
        <div className="container text-white d-flex justify-content-center pt-5">
            {processState}
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

    return { props: {} }
}

export default VerifyPage;