import React from 'react';
import UserCard from '../dedicated/user_card/UserCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const SearchResultsModal: React.FC = () => {
    const { data, loaded } = useSelector((state: RootState) => state.searchResults);

    if(loaded) {
        document.body.classList.add('overflow-hidden');

        return (
            <div className="w-100 h-100 pt-3 pb-5 position-fixed bg-white d-flex flex-wrap justify-content-center" style={{ zIndex: 10, top: 60, overflow: 'scroll' }}>
                {data.length > 0 ? data.map(({ avatar, nick, isVerified }, i: number) => (
                    <div className="mx-2 mx-md-3 mb-4 mb-md-5" key={i}>
                        <UserCard
                            avatar={avatar}
                            nick={nick}
                            isVerified={isVerified}
                            style={{ color: 'var(--global-primary-color)' }}
                        />
                    </div>
                )) :
                <h3 className="w-100 text-center primary-color">Brak wyników</h3>}
            </div>
        );
    } else {
        if(typeof document !== 'undefined') {
            document.body.classList.remove('overflow-hidden');
        }

        return null;
    }
}
export default SearchResultsModal;