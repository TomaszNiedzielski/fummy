import { useEffect } from 'react';
import Head from 'next/head';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
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
import '../styles/MoneyBoxPage.css';
import '../styles/Booking.css';
import { APP_NAME } from '../constants';
import { useRouter } from 'next/router';
import Script from 'next/script';

const cookies = new Cookies();

function Index({ Component, pageProps }) {
    const dispatch = useDispatch();

    let { token } = useSelector((state) => state.auth);
    if(!token && typeof window !== 'undefined') {
        token = cookies.get('token');
    }

    useEffect(() => {
        if(token) {
            dispatch(setToken(token));
            dispatch(loadProfileDetails());
        }
    }, [dispatch, token]);

    const router = useRouter();

    return (
        <div suppressHydrationWarning>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                <title>{APP_NAME}</title>
                <link rel="icon" href="/icons/favicon.ico" />
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
            <Script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></Script>
            <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></Script>
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