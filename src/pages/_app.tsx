import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '../redux/store';
import { setToken } from '../redux/actions/user/Auth';
import { loadProfileDetails } from '../redux/actions/user/Profile';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import GroupedModals from '../components/modals/GroupedModals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import '../styles/globals.css';
import '../styles/Modal.css';
import '../styles/User.css';
import '../styles/HomePage.css';
import '../styles/Booking.css';
import { APP_NAME } from '../constants';
import { useRouter } from 'next/router';

const cookies = new Cookies();

function Index({ Component, pageProps }) {
    const dispatch = useDispatch();
    const router = useRouter();

    const [title, setTitle] = useState(APP_NAME+' - Dedykowane filmy od twoich ulubionych idoli');

    let { token } = useSelector((state: RootState) => state.auth);
    if(!token && typeof window !== 'undefined') {
        token = cookies.get('token');
    }

    useEffect(() => {
        if(token) {
            dispatch(setToken(token));
            dispatch(loadProfileDetails());
        }
    }, [dispatch, token]);

    useEffect(() => {
        switch (router.pathname) {
            case '/u/[nick]':
                setTitle(APP_NAME + ' - ' + router.query.nick);
                break;
            case '/orders':
                setTitle(APP_NAME + ' - Zamówienia');
                break;
            case '/my-money':
                setTitle(APP_NAME + ' - Stan konta');
                break;
            case '/settings':
                setTitle(APP_NAME + ' - Ustawienia');
                break;
            case '/u/[nick]/booking':
                setTitle(APP_NAME + ' - Zamów video od ' + router.query.nick);
                break;
            case '/u/[nick]/booked':
                setTitle(APP_NAME + ' - Video zostało zamówione');
                break;
            default:
                setTitle(APP_NAME+' - Dedykowane filmy od twoich ulubionych idoli');
                break;
        }
    }, [router.pathname]);

    return (
        <div suppressHydrationWarning>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                <title>{title}</title>
                <meta name="description" content="Wyszukaj swojego ulubionego influencera i zamów video przygotowane specjalnie dla Ciebie!" />
                <link rel="icon" href="/icons/favicon.ico" />
                <script src="https://kit.fontawesome.com/b002c191d7.js" crossOrigin="anonymous"></script>
            </Head>
            <Navbar />
            <GroupedModals />
            {typeof window === 'undefined' ? null : <Component {...pageProps} key={router.asPath} />}
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </div>
    )
}

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Index Component={Component} pageProps={pageProps} />
        </Provider>
    );
}

export default MyApp;