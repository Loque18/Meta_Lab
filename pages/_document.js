import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet" />
            </Head>
            <body className="has-navbar-fixed-top">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
