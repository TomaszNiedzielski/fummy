import React, { useState } from 'react';
import PrimaryButton from '../../components/buttons/primary/PrimaryButton';
import PrimaryInput from '../../components/inputs/primary/PrimaryInput';
import { post } from '../../helpers/ApiRequest';
import Cookies from 'universal-cookie';
import router from 'next/router';

const cookies = new Cookies();

const AdminLoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('admin/login', { email, password })
        .then((res: any) => {
            cookies.remove('token');
            cookies.set('admin_token', res.token, { path: '/', maxAge: 86400 });
            router.push('/admin');
        });
    }

    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center mt-5">
                <h5>Logowanie do panelu admina</h5>
                <form onSubmit={login} noValidate className="w-100" style={{ maxWidth: '450px' }}>
                    <PrimaryInput
                        type="email"
                        onChange={setEmail}
                        value={email}
                        placeholder="e-mail"
                    />
                    <PrimaryInput
                        type="password"
                        onChange={setPassword}
                        value={password}
                        placeholder="hasło"
                    />
                    <div className="mt-3 text-center">
                        <PrimaryButton
                            type="submit"
                            title="Zaloguj się"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export const getServerSideProps = async ({ req }) => {
    const token = new Cookies(req.headers.cookie).get('admin_token');

    if (token) {
        return {
            redirect: {
                destination: '/admin',
                permanent: true
            }
        }
    }

    return {
        props: {}
    }
}

export default AdminLoginPage;