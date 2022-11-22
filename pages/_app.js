/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
// import dynamic from 'next/dynamic';

import { Provider } from 'react-redux';

// import { ToastContainer } from 'react-toastify';

import store from 'src/redux/store';

import appConfig from 'src/static/app.config';

import 'src/scss/main.scss';

const { appName } = appConfig;

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || (page => page);
    return (
        <>
            <Head>
                <title>{appName}</title>
                <meta name="description" content={appConfig.description} />
            </Head>

            <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
        </>
    );
}

export default MyApp;
