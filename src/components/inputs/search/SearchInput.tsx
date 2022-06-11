import React, { useEffect, useState } from 'react';
import styles from './SearchInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { search, CLEAR_SEARCH_RESULTS } from '../../../redux/actions/searching/SearchResults';
import Spinner from '../../loaders/spinner/Spinner';
import { RootState } from '../../../redux/store';

const SearchInput: React.FC = () => {
    const [value, setValue] = useState('');

    const { isLoading } = useSelector((state: RootState) => state.searchResults);

    const dispatch = useDispatch();

    useEffect(() => {
        let timer: any;

        if (value) {
            timer = setTimeout(() => {
                dispatch(search(value));
            }, 1000);
        } else {
            dispatch({ type: CLEAR_SEARCH_RESULTS });
        }

        return () => {
            clearTimeout(timer);
        }
    }, [value]);

    let url: string;
    if (typeof window !== 'undefined') {
        url = window.location.href;
    }

    useEffect(() => {
        dispatch({ type: CLEAR_SEARCH_RESULTS });
    }, [url]);

    return (
        <div className={styles.container}>
            <img src="/icons/search-icon.svg" className="mx-2" alt="szukaj" />
            <input
                className={styles.input}
                type={isLoading ? 'text' : 'search'}
                placeholder="Wyszukaj influencera..."
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            {isLoading && <Spinner style={spinnerStyle} />}
        </div>
    );
}
export default SearchInput;

const spinnerStyle = {
    fontSize: '2px',
    width: '3px',
    height: '3px',
    position: 'absolute',
    right: '18px',
    color: 'var(--global-primary-color)'
}