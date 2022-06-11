import { useState } from 'react';
import Cookies from 'universal-cookie';
import { API_STORAGE } from '../../constants';
import { get, post } from '../../helpers/ApiRequest';
import { isLinkExternal } from '../../helpers/Link';

interface Payout {
    id: string;
    amount: string;
    createdAt: string;
    isComplete: boolean;
    user: {
        id: number;
        avatar: string;
        fullName: string;
        email: string;
        nick: string;
        bankAccount: {
            holderName: string;
            number: string;
        }
    };
}

const PayoutsPage: React.FC<{ payoutsProps: Payout[]; token: string; }> = ({ payoutsProps, token }) => {
    const [payouts, setPayouts] = useState(payoutsProps);

    const confirmPayout = (id: string) => {
        if (confirm('Czy na pewno chcesz potwierdzić tą wypłate?')) {
            post('admin/payouts/'+id+'/confirm?token='+token)
            .then((res: any) => {
                if (res.code === 200) {
                    const updatedPayouts = payouts.map((payout) => {
                        if (payout.id === id) {
                            payout.isComplete = true;
                        }

                        return payout;
                    });

                    setPayouts(updatedPayouts);
                }
            });
        }
    }
 
    return (
        <div style={{ height: '100vh' }}>
            <table className="table table-dark table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Imię i nazwisko</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Nick</th>
                        <th scope="col">Kwota</th>
                        <th scope="col">Status</th>
                        <th scope="col">Nazwa właściciela konta</th>
                        <th scope="col">Numer konta</th>
                        <th scope="col">Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    {payouts.map(({ id, amount, isComplete, user: { avatar, fullName, email, nick, bankAccount: { holderName, number } }  }) => (
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>
                                {avatar && <img src={(isLinkExternal(avatar) ? avatar : API_STORAGE + 'avatars/' + avatar)} alt="avatar" height={40} width={40} />}
                            </td>
                            <td>{fullName}</td>
                            <td>{email}</td>
                            <td>{nick}</td>
                            <td>{amount}</td>
                            <td>{isComplete ? <span className="text-success">zrealizowano</span> : <span className="text-danger">nie zrealizowano</span>}</td>
                            <td>{holderName}</td>
                            <td>{number}</td>
                            <td>
                                {!isComplete && <button className="btn btn-primary btn-sm" onClick={() => confirmPayout(id)}>Oznacz jako przelane</button>}
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
    const payoutsResponse: any = await get('admin/payouts?token='+token);

    return {
        props: {
            payoutsProps: payoutsResponse.data,
            token
        }
    }
}

export default PayoutsPage;