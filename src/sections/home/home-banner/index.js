import Link from 'next/link';

import styles from './style.module.scss';

const { bg } = styles;

const HomeBanner = () => {
    return (
        <section className={bg}>
            <div className="container" style={{ height: '100%' }}>
                <div className="columns is-vcentered is-marginless" style={{ height: '100%' }}>
                    <div className="column is-6">
                        <h1 className="title is-1 has-text-white has-text-centered-mobile">
                            METALAB, YOUR <br />
                            <span className="has-text-cyan">GATEWAY TO WEB3</span>
                        </h1>
                        <p className="has-text-lgrey has-text-justified has-text-centered-mobile">
                            Whether you are an individual with an NFT project idea or a business that want to keep up
                            with the latest technology trends and enter the WEB3 space, we have your back. Our team will
                            make sure your transition from web2 to web3 is seamless and help you achieve your strategy
                            and long term goals.
                        </p>
                        <br />
                        <div className="has-text-centered-mobile">
                            <Link href="#ourServices">
                                <button type="button" className="button is-gra1">
                                    <b>Our Services</b>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
