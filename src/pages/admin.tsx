import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import { API_STORAGE } from '../constants';
import { get, post, _delete } from '../helpers/ApiRequest';
import { isLinkExternal } from '../helpers/Link';

interface User {
    id: string;
    avatar: string;
    fullName: string;
    email: string;
    nick: string;
    isVerified: boolean;
    ordersNumber: number;
}

const AdminPage: React.FC<{ users: User[]; token: string }> = ({ users, token }) => {
    const [updatedUsers, setUpdatedUsers] = useState(users);

    const verifyUser = (id: string) => {
        if (confirm('Czy napewno chcesz zweryfikować tego użytkownika?')) {
            post('admin/users/'+id+'/verify?token='+token)
            .then(() => {
                const updated = updatedUsers.map(user => {
                    if (user.id === id) {
                        user.isVerified = true;
                    }

                    return user;
                });

                setUpdatedUsers(updated);
            });
        }
    }

    const deleteUser = (id: string) => {
        if (confirm('Czy napewno chcesz usunąć tego użytkownika?')) {
            _delete('admin/users/'+id+'?token='+token)
            .then(() => {
                const updated = updatedUsers.filter(user => user.id !== id);

                setUpdatedUsers(updated);
            });
        }
    }

    return (
        <div className="container">
            <table className="table table-dark table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Imię i nazwisko</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Nick</th>
                        <th scope="col">Ilość zamówień</th>
                        <th scope="col">Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedUsers.map(({ id, avatar, fullName, email, nick, isVerified, ordersNumber }) => (
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>
                                {avatar && <img src={(isLinkExternal(avatar) ? avatar : API_STORAGE + 'avatars/' + avatar)} alt="avatar" height={40} width={40} />}
                            </td>
                            <td>{fullName}</td>
                            <td>{email}</td>
                            <td>{nick}</td>
                            <td>{ordersNumber}</td>
                            <td>
                                <button className="btn btn-primary btn-sm mr-3" onClick={() => verifyUser(id)} disabled={isVerified ? true : false}>Weryfikuj</button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(id)}>Usuń</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export const getServerSideProps = async ({ req }) => {
    const token = new Cookies(req.headers.cookie).get('admin_token');

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const usersResponse: any = await get('admin/users?token='+token);

    if (usersResponse.code !== 200) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            token,
            users: usersResponse.data
        }
    }
}

export default AdminPage;