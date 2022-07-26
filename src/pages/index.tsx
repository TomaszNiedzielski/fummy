import React from 'react';
import UserCard from '../components/dedicated/user_card/UserCard';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { get } from '../helpers/ApiRequest';
import AuthButtons from '../components/dedicated/auth_buttons/AuthButtons';
import { API_STORAGE } from '../constants';
import DecorativeCards from '../components/dedicated/decorative_cards/DecorativeCards';

export interface User {
    fullName: string;
    avatar: string;
    nick: string;
    prices?: {
        from: string;
        currency: string;
    };
    is24HoursDeliveryOn: boolean;
}

const HomePage: React.FC<{ users: User[] }> = ({ users }) => {
    const { token } = useSelector((state: RootState) => state.auth);

    return (
        <>
        <header className="home-header">
            <div className="home-header__text">
                <h1 className="font-weight-bold mb-4 mt-0">Dedykowane filmy od twoich <br className="d-none d-sm-block" /> ulubionych idoli!</h1>
                <div className="home-header__text--bottom">Wyszukaj swojego ulubionego influencera i zamów <br className="d-none d-sm-block" /> wymarzone video dla ciebie lub twoich bliskich!</div>
            </div>
            <video src={API_STORAGE+'videos/video-1638309703.mp4'} autoPlay={true} loop={true} muted></video>
            <div className="home-header__shadow"></div>
        </header>

        <DecorativeCards />
        {(!token && users.length === 0) && <AuthButtons />}
        <div className="container">
            <div className="home-page__users-list">
                {users.map(({ avatar, nick, fullName, prices, is24HoursDeliveryOn }, i) => (
                    <div className="d-flex flex-column justify-content-end mx-2 mx-md-3 mb-4 mb-md-5" key={i}>
                        {i === 0 && <h2 className="my-3">New</h2>}
                        <UserCard
                            style={{ color: 'whitesmoke' }}
                            avatar={avatar}
                            nick={nick}
                            fullName={fullName}
                            prices={prices}
                            is24HoursDeliveryOn={is24HoursDeliveryOn}
                        />
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export const getServerSideProps = async () => {
    const response: any = await get('users/verified');

    if (response.code === 200) {
        const users = response.data;
        return {
            props: { users }
        }
    }
}
export default HomePage;